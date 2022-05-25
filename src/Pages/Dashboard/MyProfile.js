// import React from 'react';
// import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
// import auth from '../firebase.init';

// const MyProfile = () => {
//     const [user] = useAuthState(auth);
//     const [updateProfile, updating, updateError] = useUpdateProfile(auth);

//     const displayName = user.displayName;
//     const email = user.email;

//     // const { register, formState: { errors }, handleSubmit } = useForm();

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const education = event.target.education.value;
//         const location = event.target.location.value;
//         const phone = event.target.phone.value;
//         const linkedinProfile = event.target.linkedinProfile.value;



//         // console.log(image, name, short_desc, price, quantity, supplierName, sold);

//         const url = 'https://localhost:5000/user';
//         const updatedUser = { email, displayName, phone, linkedinProfile, education, location };


//         updateProfile({ user });
//     };

//     return (
//         <div>
//             <h1>Name: {user.displayName}</h1>
//             <h3>Email: {user.email}</h3>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group mt-3">
//                     <input type="text" name='image' className="form-control" placeholder="Image URL" required />
//                 </div>
//                 <div className="form-group mt-3">
//                     <input type="text" className="form-control" name='name' placeholder="Item Name" required />
//                 </div>
//                 <div className="form-group mt-3">
//                     <input type="text" className="form-control" name='short_desc' placeholder="Short description" required />
//                 </div>
//                 <div className="form-group mt-3">
//                     <input type="text" className="form-control" name='price' placeholder="Price" required />
//                 </div>
//                 <div className="form-group mt-3">
//                     <input type="number" className="form-control" name='quantity' placeholder="Quantity" required />
//                 </div>
//                 <div className="form-group mt-3">
//                     <input type="text" className="form-control" name='supplierName' placeholder="Supplier Name" required />
//                 </div>


//                 <div className="form-check mt-3 d-flex ">
//                     <input className='mt-2 me-2' onClick={() => setSold(!sold)} type="checkbox" name="sold" />
//                     <div>Sold</div>
//                 </div>
//                 <button type="submit" className="btn btn-secondary mt-3 w-100 mb-5">Add Item</button>
//                 <ToastContainer></ToastContainer>

//             </form>
//         </div>
//     );
// };

// export default MyProfile;