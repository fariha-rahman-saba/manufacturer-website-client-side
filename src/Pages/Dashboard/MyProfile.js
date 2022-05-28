import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const displayName = user.displayName;
    const email = user.email;

    // const { register, formState: { errors }, handleSubmit } = useForm();

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const education = event.target.education.value;
    //     const location = event.target.location.value;
    //     const phone = event.target.phone.value;
    //     const linkedinProfile = event.target.linkedinProfile.value;



    //     // console.log(image, name, short_desc, price, quantity, supplierName, sold);

    //     const url = 'https://localhost:5000/user';
    //     const updatedUser = { email, displayName, phone, linkedinProfile, education, location };


    //     updateProfile({ user });
    // };
    const handleSubmit = async event => {
        event.preventDefault();

        const education = event.target.education.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const linkedinProfile = event.target.linkedinProfile.value;

        // await createUserWithEmailAndPasswor(data.email, data.password);
        // await updateProfile({ displayName: data.name });
        await updateProfile({ phone, linkedinProfile, education, location });
        console.log('update done');
        event.target.reset();
    };

    return (
        <div>
            <h1>Name: {user.displayName}</h1>
            <h3>Email: {user.email}</h3>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Education" className="input input-bordered w-full mt-6 max-w-xs" name='education' />
                <br />

                <input type="text" placeholder="Location" className="input input-bordered w-full mt-6 max-w-xs" name='location' />
                <br />
                <input type="text" placeholder="Phone Number" className="input input-bordered w-full mt-6 max-w-xs" name='phone' />
                <br />
                <input type="text" placeholder="LinkedIn Profile Link" className="input input-bordered w-full mt-6 max-w-xs" name='linkedinProfile' />
                <br />

                <button type="submit" className="btn btn-secondary mt-3 w-100 mb-5 text-white">Update Profile</button>
                {/* <ToastContainer></ToastContainer> */}

            </form>
        </div>
    );
};

export default MyProfile;