module.exports = access

access.usage = "npm access public [<package>]"
             + "\nnpm access restricted [<package>]"
             + "\nnpm access add <read-only|read-write> <entity> [<package>]"
             + "\nnpm access rm <entity> [<package>]"
             + "\nnpm access ls [<package>]"
             + "\nnpm access edit [<package>]"

access.completion = function (opts, cb) {
  var argv = opts.conf.argv.remain
  if (argv.length === 2) {
    return cb(null, ["public", "restricted", "add", "rm", "ls", "edit"])
  }

  switch (argv[2]) {
    case "public":
    case "restricted":
    case "ls":
    case "edit":
      return cb(new Error("unimplemented: packages you can change"))
    case "add":
      if (argv.length === 3) return cb(null, ["read-only", "read-write"])

      return cb(new Error("unimplemented: entities and packages"))
    case "rm":
      return cb(new Error("unimplemented: entities and packages"))
    default:
      return cb(new Error(argv[2]+" not recognized"))
  }
}

function access (args, cb) {
  var cmd = args.shift()
  switch (cmd) {
    case "public": case "restricted": return setLevel(args, cb)
    case "add": case "set": return add(args, cb)
    case "rm": case "del": case "clear": return rm(args, cb)
    case "list": case "sl": case "ls": return ls(args, cb)
    case "edit": case "ed": return edit(args, cb)
    default: return cb("Usage:\n"+access.usage)
  }
}

function setLevel (args, cb) {
  return cb(new Error("npm access public / restricted isn't implemented yet!"))
}

function add (args, cb) {
  return cb(new Error("npm access add isn't implemented yet!"))
}

function rm (args, cb) {
  return cb(new Error("npm access rm isn't implemented yet!"))
}

function ls (args, cb) {
  return cb(new Error("npm access ls isn't implemented yet!"))
}

function edit (args, cb) {
  return cb(new Error("npm edit ls isn't implemented yet!"))
}
