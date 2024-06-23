import { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabase';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
}

const PatientList = ({ doctorId }: { doctorId: string }) => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const { data } = await supabase
        .from('patients')
        .select('*')
        .eq('doctorId', doctorId);
      setPatients(data || []);
    };
    fetchPatients();
  }, [doctorId]);

  return (
    <ul>
      {patients.map((patient) => (
        <li key={patient.id}>
          <h2>{patient.name}</h2>
          <p>Age: {patient.age}</p>
          <p>Gender: {patient.gender}</p>
        </li>
      ))}
    </ul>
  );
};

export default PatientList;
