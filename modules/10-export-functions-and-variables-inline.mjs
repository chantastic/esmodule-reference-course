// demonstrated that these export styles can be mixed
function greet(name) {
  return `Hey, ${name}!`;
}
      
// inline export
export function chant(name) {
  return `${name}! ${name}! ${name}!`
}
      
// export list
export { greet }