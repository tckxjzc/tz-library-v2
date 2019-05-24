export function uploadData(type:string,data:any) {
   return fetch(`//up.tckxjzc.xyz/upload/collection?type=${type}&body=${JSON.stringify(data)}`);
}