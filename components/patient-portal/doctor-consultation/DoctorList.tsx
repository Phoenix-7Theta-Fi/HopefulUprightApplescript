import { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabase';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
}

const DoctorList = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await supabase.from('doctors').select('*');
      setDoctors(data || []);
    };
    fetchDoctors();
  }, []);

  return (
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.id}>
          <h2>{doctor.name}</h2>
          <p>{doctor.specialization}</p>
        </li>
      ))}
    </ul>
  );
};

export default DoctorList;
