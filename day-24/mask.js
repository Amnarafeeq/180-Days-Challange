let info = "User ID: 12345"
// /d ka mtlb digit, or g flag sb digits ko match krega
let masked = info.replace(/\d/g,"*")
// sb digits ko "*" se replace krega
console.log(masked);
