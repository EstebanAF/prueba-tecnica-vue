
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_KEY || 'https://joqeuksdsevvdqplxplw.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvcWV1a3Nkc2V2dmRxcGx4cGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2ODY2MzcsImV4cCI6MjAyODI2MjYzN30.rETnTBGBH9rCB2IqW2-1y_MC267Z5Ytj7Eoz71HxWr0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;