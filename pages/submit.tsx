import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SubmitKPI() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    agencyName: '',
    sharpenScore: '',
    mainKPI: '',
    industry: '',
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    router.push('/submit-success');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.05)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Submit KPIs</h1>

        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Agency Name</label>
        <input type="text" name="agencyName" value={formData.agencyName} onChange={handleChange} required style={inputStyle} />

        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Sharpen Score</label>
        <input type="number" name="sharpenScore" value={formData.sharpenScore} onChange={handleChange} required style={inputStyle} />

        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Main KPI</label>
        <input type="text" name="mainKPI" value={formData.mainKPI} onChange={handleChange} required style={inputStyle} />

        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Industry</label>
        <input type="text" name="industry" value={formData.industry} onChange={handleChange} required style={inputStyle} />

        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Website</label>
        <input type="url" name="website" value={formData.website} onChange={handleChange} required style={inputStyle} />

        <button type="submit" style={{
          marginTop: '1.5rem',
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}>
          Submit
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

