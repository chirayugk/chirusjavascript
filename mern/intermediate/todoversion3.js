let mytodos = {
    day: "monday",
    meetings: 0,
    meetdone: 0,
    addMeeting: function (num = 0) {
        this.meetings = this.meetings + num
        return `you have ${this.meetings} meetings today`
    },
    meetingdone: function (meet = 0) {
        this.meetdone = this.meetdone - meet
    },
    resetday: function () {
        this.meetings = 0
        this.meetdone = 0
    },
    getsummary: function () {
        let meetleft = this.meetings + this.meetdone
        return `you have ${meetleft} meetings left`
    }
}
console.log(mytodos.addMeeting(5))
mytodos.meetingdone(4)
console.log(mytodos.getsummary())
mytodos.resetday()
console.log(mytodos)