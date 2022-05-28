import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const displayName = user.displayName;
    const email = user.email;

    const handleSubmit = async event => {
        event.preventDefault();

        const education = event.target.education.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const linkedinProfile = event.target.linkedinProfile.value;

        await updateProfile({ phone, linkedinProfile, education, location });
        event.target.reset();
        toast('Profile Updated');
    };

    return (
        <div>
            <h1>Name: {user.displayName}</h1>
            <h3>Email: {user.email}</h3>
            {user.education && <h3>Education: {user.education}</h3>}
            {user.location && <h3>Location: {user.location}</h3>}
            {user.phone && <h3>Phone: {user.phone}</h3>}
            {user.linkedinProfile && <h3>Linkedin Profile: {user.linkedinProfile}</h3>}


            <label for="update-profile-modal" className="btn btn-secondary modal-button text-white mt-5 mb-10 w-60">Update Profile</label>

            <input type="checkbox" id="update-profile-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="update-profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

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

                    </form>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;