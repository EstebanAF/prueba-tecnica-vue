import IPatient from '@/Interface/IPatient';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.SUPABASE_KEY || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// get the UUID 
function getCurrentUser() {
  const user = (supabase.auth as any).user();
  return user ? user.id : null;
}


async function getPatients() {
  try {
    const userId = getCurrentUser(); 
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
    const userId = getCurrentUser(); // Obtén el UUID del usuario actual
    if (!userId) throw new Error('No hay usuario autenticado.');

    const { data, error } = await supabase
      .from('patients')
      .insert({ ...patientData, user_id: userId }); // Asocia el paciente al UUID del usuario

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

export { getPatients, getPatientById, createPatient, updatePatient, deletePatient };
