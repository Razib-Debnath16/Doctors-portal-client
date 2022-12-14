import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { jsonEval } from '@firebase/util';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, 'PP');
    const [user, loading, error] = useAuthState(auth);
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot: slot,
            patientEmail: user.email,
            phone: phone
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set on ${formattedDate} at ${slot}`);
                }
                else {
                    toast.error(`Already have an  Appointment on ${data.booking?.date} at ${slot}`);
                }
                refetch();
                setTreatment(null);
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-center text-secondary my-5">Booking for :{name}</h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-10 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input-bordered w-full max-w-xs text-bold uppercase" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="name" disabled value={user?.displayName} className="input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email} className="input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Number" className="input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary input-bordered w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;