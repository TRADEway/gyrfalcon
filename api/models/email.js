class Email {
  constructor({ email, username }) {
      this.email = email
      this.username = username
  }
  
  key() {
      return {
          'PK': { 'S': `CUSTOMEREMAIL#${this.email}` },
          'SK': { 'S': `CUSTOMEREMAIL#${this.email}` },
      }
  }

  toItem() {
      return {
          ...this.key(),
          'Type': { 'S': 'CustomerEmail' },
          'Email': { 'S': this.email },
          'Username': { 'S': this.username }
      }
  }
}

module.exports = Email