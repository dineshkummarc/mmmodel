var x = {},
    assert = require('assert'),
    is = require('should'),
    mmodel = require('../lib/core'),
    Task = require("./lib/task") 

Task.setStore("memory")

var task, o

exports.zero_tasks = function(done) {
  Task.count(function(val) {
    val.should.equal(0)
    done()
  })
}

exports.unsaved_task_has_no_id = function(done) {
  var t = new Task()
  is.ok(!t.id)
  done()
}


exports.save_valid_task = function(done) {
  var t = new Task({user: "billy"})

  t.save(function(ok) {
    if(!ok)
      console.log(t.errors)
    
    ok.should.be.true
    is.ok(t.id, "is saved")

    Task.exists(1, function(ok) {
      is.ok(ok)
    })
    
    Task.count(function(num) {
      is.equal(num, 1, "task count is 1")
      done()
    })
  })
}

exports.find_saved_task = function(done) {
  Task.find(1, function(u) {
    is.equal(u.id, 1, "id is correct")  
  
    Task.count(function(num) {
      is.equal(num, 1, "task count is 1")
      done()
    })
  })
}


exports.test_failed_create = function(done) {
  Task.create({id: 21}, function(p) {
    is.ok(p.errors.length, "task needs owner")
    done()
  })
}


exports.test_create = function(done) {
  Task.create({user: "wibwob"}, function(p) {
    is.ok(p.id)
    p.id.should.equal(2)
  })
  
  Task.create({user: "wibwob"}, function(p) {
    is.ok(p.id)
    p.id.should.equal(3)
    done()
  })
}

