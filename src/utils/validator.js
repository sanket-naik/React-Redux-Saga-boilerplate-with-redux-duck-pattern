export const Validator=(name, value)=>{

    switch (name) {
      case "Name":
          return /^[A-Za-z ]+$/.test(value) ? true : false
      default:
          return false
    }
  }