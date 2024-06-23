import { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabase';

interface HealthHistoryItem {
  id: string;
  date: string;
  description: string;
}

const HealthHistory = ({ patientId }: { patientId: string }) => {
  const [healthHistory, setHealthHistory] = useState<HealthHistoryItem[]>([]);

  useEffect(() => {
    const fetchHealthHistory = async () => {
      const { data } = await supabase
        .from('health_history')
        .select('*')
        .eq('patientId', patientId);
      setHealthHistory(data || []);
    };
    fetchHealthHistory();
  }, [patientId]);

  return (
    <ul>
      {healthHistory.map((item) => (
        <li key={item.id}>
          <h3>{item.date}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default HealthHistory;
