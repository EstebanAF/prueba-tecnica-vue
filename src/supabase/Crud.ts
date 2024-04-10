import IPatient from '@/Interface/IPatient';
import supabase from './client'
// get the UUID 
async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    
    return user?.id
  }
  
  async function login (email:string, pass:string){
    try{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: pass
        })    
        return data
    } catch (error) {
        console.error('Error al Logear: ');
        throw error;
    }
  }

  async function logout (){
    const { error } = await supabase.auth.signOut()
    
  }
  async function getPatients() {
    try {
      const userId = await getCurrentUser();
      if (!userId) throw new Error('No hay usuario autenticado.');
  
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .eq('user_id', userId); 
  
      if (error) {
        throw error;
      }
  
      return data;
    } catch (error) {
      console.error('Error al obtener pacientes:');
      throw error;
    }
  }
  
  // Función para obtener un paciente por su ID
  async function getPatientById(patientId:number) {
    try {
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .eq('id', patientId)
        .single();
  
      if (error) {
        throw error;
      }
  
      return data;
    } catch (error) {
      console.error('Error al obtener paciente por ID:');
      throw error;
    }
  }
  
  // Función para crear un nuevo paciente asociado a un usuario específico
  async function createPatient(patientData:IPatient) {
    try {
      const userId = await getCurrentUser(); // Obtén el UUID del usuario actual
      if (!userId) throw new Error('No hay usuario autenticado.');
        console.log(userId)
      const { data, error } = await supabase
        .from('patients')
        .insert({ 
            name: patientData.name,
            email: patientData.email,
            age: patientData.age,
            gender: patientData.gender,
            user_id: userId })
        .select(); // Asocia el paciente al UUID del usuario
  
      if (error) {
        throw error;
      }
  
      return data;
    } catch (error) {
      console.error('Error al crear paciente:');
      throw error;
    }
  }
  
  // Función para actualizar un paciente existente
  async function updatePatient(patientId:number, updates:IPatient) {
    try {
      const { data, error } = await supabase
        .from('patients')
        .update(updates)
        .eq('id', patientId);
  
      if (error) {
        throw error;
      }
  
      return data;
    } catch (error) {
      console.error('Error al actualizar paciente:');
      throw error;
    }
  }
  
  
  async function deletePatient(patientId:number) {
    try {
      const { data, error } = await supabase
        .from('patients')
        .delete()
        .eq('id', patientId);
  
      if (error) {
        throw error;
      }
  
      return data;
    } catch (error) {
      console.error('Error al eliminar paciente:');
      throw error;
    }
  }
  
  export { login, logout, getCurrentUser,getPatients, getPatientById, createPatient, updatePatient, deletePatient };
  