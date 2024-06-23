import { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabase';

interface DataAnalyticsItem {
  id: string;
  date: string;
  data: { [key: string]: number };
}

const DataAnalytics = ({ patientId }: { patientId: string }) => {
  const [dataAnalytics, setDataAnalytics] = useState<DataAnalyticsItem[]>([]);

  useEffect(() => {
    const fetchDataAnalytics = async () => {
      const { data } = await supabase
        .from('data_analytics')
        .select('*')
        .eq('patientId', patientId);
      setDataAnalytics(data || []);
    };
    fetchDataAnalytics();
  }, [patientId]);

  return (
    <ul>
      {dataAnalytics.map((item) => (
        <li key={item.id}>
          <h3>{item.date}</h3>
          <ul>
            {Object.entries(item.data).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default DataAnalytics;
