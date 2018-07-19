class PerfectNumbers {
  constructor(num) {
    this.num = num
  }

  classify() {
    if(this.num <= 0){
      return "Classification is only possible for natural numbers."
    }
    let arr = [];
    for(var i = 0;i < this.num;i++){
      if(this.num % i === 0){
        arr.push(i)
      }
    }
    const result = arr.reduce((a,b)=>{
      return a + b 
    }) 
    if(this.num === result){
      return "perfect"
    } else if(this.num < result){
      return "abundant"
    } else if(this.num > result){
      return "deficient"
    } 
  }
}

module.exports = PerfectNumbers

