import mongoose, { Schema } from "mongoose";

const shortnessOfBreathSchema = new Schema(
  {
    qh1: String, // Are you currently experiencing shortness of breath?
    qh2: String, // How would you describe the shortness of breath?
    qh3: String, // When did you first notice the shortness of breath?
    qh4: String, // Is it worse during physical activity?
    qh5: String, // Do you have a cough associated with it?
    qh6: String, // Are you experiencing chest pain?
    qh7: String, // Do you have any known respiratory conditions?
    qh8: String, // Have you been exposed to any allergens recently?
    qh9: String, // Do you smoke or have you been exposed to secondhand smoke?
    qh10: String, // Have you experienced any recent infections?
    qh11: String, // Do you have a history of heart disease?
    qh12: String, // Are you experiencing any swelling in your legs or ankles?
    qh13: String, // Is there a family history of respiratory problems?
    qh14: String, // Are you experiencing anxiety or panic attacks?
    qh15: String, // Have you recently traveled to a different altitude?
    qh16: String, // Have you had any recent surgeries?
    qh17: String, // Are you feeling more fatigued than usual?
    qh18: String, // Do you experience any coughing or wheezing?
    qh19: String, // Do you feel a sense of urgency to breathe?
    qh20: String, // Are there specific positions that help ease your breath?
    qh21: String, // Have you experienced recent weight changes?
    qh22: String, // Is there a history of asthma or allergies in your family?
    qh23: String, // Do you experience shortness of breath at night?
    qh24: String, // Do you have a history of cardiovascular diseases?
    qh25: String, // Have you recently experienced significant stress?
    qh26: String, // Are you currently under any medical treatment?
    qh27: String, // Are there any additional symptoms you would like to mention?
  },
  {
    timestamps: true,
  }
);

const ShortnessOfBreath =
  mongoose.models.ShortnessOfBreath || mongoose.model("ShortnessOfBreath", shortnessOfBreathSchema);

export default ShortnessOfBreath;
