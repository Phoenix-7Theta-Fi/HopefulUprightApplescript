import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import PatientList from '../../components/doctor-portal/PatientList.tsx';
import AppointmentList from '../../components/doctor-portal/AppointmentList.tsx';
import VideoConsultation from '../../components/doctor-portal/VideoConsultation.tsx';

const DoctorPortalPage = () => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUserId = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUserId(data.user.id);
      }
    };
    fetchUserId();
  }, []);

  return (
    <div>
      <h1>Doctor Portal</h1>
      <PatientList doctorId={userId} />
      <AppointmentList doctorId={userId} />
      <VideoConsultation appointmentId="appointment-id" />
    </div>
  );
};

export default DoctorPortalPage;
