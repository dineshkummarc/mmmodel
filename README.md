MMODEL
------

Mtask is a Javascript ORM for Redis and client side use through a REST api. It has multiple backends - using the same API. There's also a memory store.

Structure
---

There's a common Core with 3 stores (Redis, Memory and REST). Other's could easily be written.


API
---

Core
---

var Task = Mmodel.create("Task", { ... }) 

// We now have the following functions available to us in core

new Task(attr, [sync]) 
Task.load(attr)
Task.create(attr, [callback])
task.sync
task.dirty([prop])
task.update(params, [callback]) {
task.save([callback])
task.error(str) 
task.destroy([callback])
task.toJSON()
task.in_error()
task.merge(attr, [x])
task.validate(callback)
Task._setStore
Task.load_multi(array)
Task.bind = task.bind(ev, callback, async)
Task.unbind = task.unbind(ev, callback)
task.trigger(ev)


Tests
----

To run the TDD tests:
<pre>
expresso -s test/*
</pre>