const date = new Date()

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.element = document.querySelector(selector)
        this.time = targetDate - date
    }

    getSeconds() {
        const secs = Math.floor((this.time % (1000 * 60)) / 1000)
        return String(secs).padStart(2, '0')
    }

    getMinutes() {
        const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60))
        return String(mins).padStart(2, '0')
    }

    getHours() {
        const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        return String(hours).padStart(2, '0')
    }

    getDays() {
        const days = Math.floor(this.time / (1000 * 60 * 60 * 24))
        return String(days).padStart(2, '0')
    }

    render() {
        this.element.querySelector('.value[data-value="days"]').innerHTML = `${this.getDays()}`
        this.element.querySelector('.value[data-value="hours"]').innerHTML = `${this.getHours()}`
        this.element.querySelector('.value[data-value="mins"]').innerHTML = `${this.getMinutes()}`
        this.element.querySelector('.value[data-value="secs"]').innerHTML = `${this.getSeconds()}`
    }

    init() {
        const interval = setInterval(() => {
            this.time -= 1000
            if (this.time <= 0) {
                this.time = 0
                clearInterval(interval)
            }
            this.render()
        }, 1000)
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Mar 26, 2022'),
})
timer.init()