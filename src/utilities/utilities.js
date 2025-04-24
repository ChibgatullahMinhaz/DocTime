
export const getDoctor = (key) => {
   const storedDoctor = localStorage.getItem(key);
   return storedDoctor ? JSON.parse(storedDoctor) : [];
}

export const addDoctor = (id, key) => {
   const storedDoctor = getDoctor(key);
   console.log(storedDoctor);
   const isExist = storedDoctor.includes(id);
   if (isExist) {
   
    return false;
   }else{
    storedDoctor.push(id);
    localStorage.setItem(key, JSON.stringify(storedDoctor))
    return true;
   }
}

export const removeDoctor = (key, id) => {
    const storedDoctor = getDoctor(key);
    const remainingDoctor = storedDoctor.filter(doctor => doctor !== id);
    localStorage.setItem(key, JSON.stringify(remainingDoctor));
}