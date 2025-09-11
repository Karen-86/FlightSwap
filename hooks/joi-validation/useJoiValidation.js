// import React from "react";
// import Joi from "joi";

// export default function useValidation() {

//     const validateContact = (obj) => {
//         const contactSchema = new Joi.object({
//             name:  Joi.string().min(3).required(),
//             email:  Joi.string().min(3).email({ tlds: { allow: false } }).required(),
//             // message:  Joi.string().min(15).allow('').optional(),
//             message:  Joi.string().min(15),
//         }).options({ abortEarly: false })
//         return contactSchema.validate(obj);
//     };

//     return {validateContact}
// }


import React from "react";
import Joi from "joi";

export default function useValidation() {

    const validateContact = (obj) => {
        const contactSchema = new Joi.object({
            fromCountry:  Joi.string().required().label("From Country"),
            toCountry:  Joi.string().required().label("To Country"),
            departure:  Joi.string().required().label("Departure"),
            passengers:  Joi.string().required().label("Passengers"),
            return:  Joi.string().allow('').required().label("Return"),
            fullName:  Joi.string().required().label("Full Name"),
            phone:  Joi.string().min(3).required().label("Phone"),
            email:  Joi.string().min(3).email({ tlds: { allow: false } }).required().label("Email"),
            // message:  Joi.string().min(15).allow('').optional(),
            message:  Joi.string().min(15),
        }).options({ abortEarly: false })
        return contactSchema.validate(obj);
    };

    return {validateContact}
}
