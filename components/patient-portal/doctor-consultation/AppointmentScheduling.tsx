import { useState } from 'react';
import { supabase } from '../../../utils/supabase';

interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  dateTime: string;
}

const AppointmentScheduling = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await supabase
      .from('appointments')
      .insert([{ patientId: 'patient-id', doctorId: selectedDoctorId, dateTime: selectedDateTime }]);
    setAppointments([...appointments, data[0]]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a doctor:
        <select value={selectedDoctorId} onChange={(e) => setSelectedDoctorId(e.target.value)}>
          {/* Fetch doctors from Supabase and map them to options */}
        </select>
      </label>
      <label>
        Select a date and time:
        <input type="datetime-local" value={selectedDateTime} onChange={(e) => setSelectedDateTime(e.target.value)} />
      </label>
      <button type="submit">Schedule appointment</button>
    </form>
  );
};

export default AppointmentScheduling;
