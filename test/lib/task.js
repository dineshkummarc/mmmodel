
var Task = require("../../lib/index").create("Task", {
  id: { type: "number", auto_inc: true },
  user: { type: "string", required: "true" },
  created_at: { type: "date" },
  title: { type:"string", "default": "no title!" },
  keywords: { type:"json", "default": ["books"] },
})

Task.bind("saving", function updateCreatedAt(done) {
  this.created_at || (this.created_at = new Date())
  delete this._saved
  done()
}, true) // async

Task.bind("saved", function setSaved() {
  this._saved = true
}) // async

Task.bind("initialize", function(done) {
  this.test = 123
  done()
}, true)



module.exports = Task