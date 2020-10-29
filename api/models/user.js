class User {
    constructor({ username, email, name, roles, createdAt = new Date() }) {
        if (!username) {
            throw new Error('User requires a username')
        }
        this.username = username
        this.email = email
        this.name = name
        this.roles = roles
        this.createdAt = createdAt
    }
    
    pk() {
        return { 'S': `USER#${this.username.toLowerCase()}` }
    }

    key() {
        return {
            'PK': this.pk(),
            'SK': { 'S': `USER#${this.username.toLowerCase()}` }
        }
    }
    
    gsi1() {
        return {
            'GSI1PK': { 'S': `USER#${this.username.toLowerCase()}` },
            'GSI1SK': { 'S': `USER#${this.username.toLowerCase()}` }
        }
    }

    userIndex() {
        return {
            'UserIndex': { 'S': `USER#${this.username.toLowerCase()}` },
        }
    }


    toItem() {
        const item = {
            ...this.key(),
            ...this.gsi1(),
            ...this.userIndex(),
            'Type': { 'S': 'User' },
            'Username': { 'S': this.username },
            'Email': { 'S': this.email },
            'Name': { 'S': this.name },
            'CreatedAt': { 'S': this.createdAt.toISOString() },
        }
        if (this.roles && this.roles.length) {
            item['Roles'] = { 'SS': this.roles }
        }
        return item
    }
    
    static fromItem = (item) => {
        return new User({
            username: item.Username.S,
            email: item.Email.S,
            name: item.Name.S,
            roles: item.Roles ? item.Roles.SS : [],
            createdAt: new Date(item.CreatedAt.S)
        })
    }
}

module.exports = User