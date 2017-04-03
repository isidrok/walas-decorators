// Specifies the description of



let source = getSource(descriptor);
let key  = 'description';
if(source!=='class'){
   let container = (source === 'method' ? 'methods' : 'properties');
   key = `${container}.${key}.description`
}
setMeta(target,key,params[0]);

