// 'use client';

// import React, { useState } from 'react'
// import emailjs from "@emailjs/browser";
// import { SendIcon } from 'lucide-react';

// export default function EmailjsComponent() {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
  
//   const templateParams = {
//     from_email: email,
//     message: message,
//   };
//   const Emailjs_service_id = "service_43u5khi";
//   const Emailjs_template_id = "template_6bczhi4";
//   const Emailjs_public_key = "eLD18GBLSSCUPsz3Y";
//   const sendEmail = async (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     emailjs.send(Emailjs_service_id + "",
//       Emailjs_template_id + "",
//       templateParams, 
//       Emailjs_public_key + "")
//     .then((response) => {
//       console.log('Email sent successfully!', response);
//       setEmail('');
//       setMessage('');
//     })
//     .catch((error) => {
//       console.error('Error sending email:', error);
//     });
// }

//   return (
//     <form onSubmit={sendEmail} className="relative space-y-4 w-full">
//     <div>
//       <label htmlFor="email" className="sr-only">Email</label>
//         <input
//         className="rounded-sm h-10 w-full"
//         placeholder="contact@Email.com"
//         type="email"
//         id="email"
//         name="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         />
      
//     </div>

//     <div>
//       <label htmlFor="message" className="sr-only">Message</label>
//         <textarea
//           className="rounded-sm h-20 w-full"
//           placeholder="...."
//           id="message"
//           name="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />

//     </div>
//     <button type="submit" className='text-right md:absolute right-0 bottom-100'>
//       <SendIcon/> 
//     </button>

//   </form>
//   )
// }