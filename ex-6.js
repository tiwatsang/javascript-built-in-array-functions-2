const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  if(carCollection.includes(carBrand)){
    const position = carCollection.indexOf(carBrand) + 1
    return `${carBrand} has already existed in the ${position} has already existed in the`
  } else { carCollection.push(carBrand)
     return `new car collection is :${carBrand}`
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 has already existed in the