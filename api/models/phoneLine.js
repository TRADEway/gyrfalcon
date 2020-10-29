class PhoneLine {
  constructor({ number, username, createdAt = new Date() }) {
      if (!number) {
          throw new Error('PhoneLine requires a number')
      }
      this.number = number
      this.username = username
      this.createdAt = createdAt
  }

  key() {
      return {
          'PK': { 'S': `PHONE#${this.number}` },
          'SK': { 'S': `PHONE#${this.number}` }
      }
  }
  
  gsi1() {
      return {
          'GSI1PK': { 'S': `USER#${this.username.toLowerCase()}` },
          'GSI1SK': { 'S': `PHONE#${this.number}` }
      }
  }

  toItem() {
      const item = {
          ...this.key(),
          'Type': { 'S': 'PhoneLine' },
          'Number': { 'S': this.number },
          'CreatedAt': { 'S': this.createdAt.toISOString() },
      }
      if (this.username) {
        item['Username'] = { 'S': this.username }
        item['GSI1PK'] = this.gsi1()['GSI1PK']
        item['GSI1SK'] = this.gsi1()['GSI1SK']
      }
      return item
  }
  
  static fromItem = (item) => {
      return new PhoneLine({
          number: item.Number.S,
          username: item.Username.S,
          createdAt: new Date(item.CreatedAt.S)
      })
  }
}

module.exports = PhoneLine