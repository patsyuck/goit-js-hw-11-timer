const date = new Date()

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.element = document.querySelector(selector)
        this.time = targetDate - date
    }

    getSeconds() {
        const secs = Math.floor((this.time % (1000 * 60)) / 1000)
        return secs
    }

    getMinutes() {
        const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60))
        return mins
    }

    getHours() {
        const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        return hours
    }

    getDays() {
        const days = Math.floor(this.time / (1000 * 60 * 60 * 24))
        return days
    }

    render() {
        this.element.innerHTML = `
        <div class="field">
            <span class="value" data-value="days">${this.getDays()}</span>
            <span class="label">Days</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="hours">${this.getHours()}</span>
            <span class="label">Hours</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="mins">${this.getMinutes()}</span>
            <span class="label">Minutes</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="secs">${this.getSeconds()}</span>
            <span class="label">Seconds</span>
        </div>
        `
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