import mongoose, { Schema } from "mongoose";

const shortnessOfBreathSchema = new Schema(
  {
    qsb1: String, // Are you currently experiencing shortness of breath?
    qsb2: String, // How would you describe the shortness of breath?
    qsb3: String, // When did you first notice the shortness of breath?
    qsb4: String, // Is it worse during physical activity?
    qsb5: String, // Do you have a cough associated with it?
    qsb6: String, // Are you experiencing chest pain?
    qsb7: String, // Do you have any known respiratory conditions?
    qsb8: String, // Have you been exposed to any allergens recently?
    qsb9: String, // Do you smoke or have you been exposed to secondhand smoke?
    qsb10: String, // Have you experienced any recent infections?
    qsb11: String, // Do you have a history of heart disease?
    qsb12: String, // Are you experiencing any swelling in your legs or ankles?
    qsb13: String, // Is there a family history of respiratory problems?
    qsb14: String, // Are you experiencing anxiety or panic attacks?
    qsb15: String, // Have you recently traveled to a different altitude?
    qsb16: String, // Have you had any recent surgeries?
    qsb17: String, // Are you feeling more fatigued than usual?
    qsb18: String, // Do you experience any coughing or wheezing?
    qsb19: String, // Do you feel a sense of urgency to breathe?
    qsb20: String, // Are there specific positions that help ease your breath?
    qsb21: String, // Have you experienced recent weight changes?
    qsb22: String, // Is there a history of asthma or allergies in your family?
    qsb23: String, // Do you experience shortness of breath at night?
    qsb24: String, // Do you have a history of cardiovascular diseases?
    qsb25: String, // Have you recently experienced significant stress?
    qsb26: String, // Are you currently under any medical treatment?
    qsb27: String, // Are there any additional symptoms you would like to mention?
  },
  {
    timestamps: true,
  }
);

const ShortnessOfBreath =
  mongoose.models.ShortnessOfBreath || mongoose.model("ShortnessOfBreath", shortnessOfBreathSchema);

export default ShortnessOfBreath;
