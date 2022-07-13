export default function useAddClientForm() {
 const [form, setForm] = useState({
  name: '',
  cedula: '',
  address: '',
  phone: '',
 });

 const handleChange = (name, value) => {
  setForm({ ...form, [name]: value });
 };
}
