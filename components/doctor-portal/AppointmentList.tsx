import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';

interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  dateTime: string;
}

const AppointmentList = ({ doctorId }: { doctorId: string }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const { data } = await supabase
        .from('appointments')
        .select('*')
        .eq('doctorId', doctorId);
      setAppointments(data || []);
    };
    fetchAppointments();
  }, [doctorId]);

  return (
    <ul>
      {appointments.map((appointment) => (
        <li key={appointment.id}>
          <h3>{appointment.dateTime}</h3>
          <p>Patient ID: {appointment.patientId}</p>
        </li>
      ))}
    </ul>
  );
};

export default AppointmentList;
