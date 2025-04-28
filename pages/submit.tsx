import { useState } from 'react';

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '2rem',
      textAlign: 'center'
    }}>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h1 style={{ marginBottom: '1rem' }}>Submit Your KPIs</h1>
          
          <input type="text" placeholder="Agency Name" required style={inputStyle} />
          <input type="text" placeholder="Main KPI (e.g., ROAS 5.2x)" required style={inputStyle} />
          <input type="text" placeholder="Managed Budget (optional)" style={inputStyle} />
          <input type="url" placeholder="Website URL" required style={inputStyle} />
          <input type="email" placeholder="Contact Email" required style={inputStyle} />
          
          <button type="submit" style={buttonStyle}>Submit KPIs</button>
        </form>
      ) : (
        <div>
          <h1>Thank you for submitting!</h1>
          <p>We’ll review your KPIs shortly.</p>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

const buttonStyle = {
  padding: '0.75rem',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '#000',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer'
};
