import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import FormField from "./fields/FormField";
import Select from "./fields/Select";
import MultiChoice from "./fields/MultiChoice";
import PastPsychiatricTreatment from "./fields/PastPsychiatricTreatment";
import FillForm from "./fields/FillForm";
import RadioButton from "./fields/RadioButton";
import formStyles from "../../constants/styles/formStyles";

const BasicDataForm = ({ handleChange, handleBlur, values }) => {
  return (
    <>
      <Text style={styles.subtitleText}>Powód i kontekst zgłoszenia</Text>
      <FormField
        name="reason_of_report"
        onChangeText={handleChange("reason_of_report")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("reason_of_report")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.reason_of_report}
      />
      <Text style={styles.subtitleText}>Główne dolegliwości</Text>
      <FormField
        name="major_ailments"
        onChangeText={handleChange("major_ailments")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("major_ailments")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.major_ailments}
      />
      <Text style={styles.subtitleText}>
        Obecność myśli i tendencji suicydalnych lub homicydalnych
      </Text>
      <Select
        name="suicidal_thoughts_choice"
        leftText="Obecne"
        rightText="Nieobecne"
        defaultOption={values.suicidal_thoughts_choice}
      />
      <FormField
        name="suicidal_thoughts"
        onChangeText={handleChange("suicidal_thoughts")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("suicidal_thoughts")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.suicidal_thoughts}
      />
      <Text style={styles.subtitleText}>Inne dolegliwości</Text>
      <FormField
        name="other_ailments"
        onChangeText={handleChange("other_ailments")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("other_ailments")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.other_ailments}
      />
      <Text style={styles.subtitleText}>Przebyte choroby i operacje</Text>
      <MultiChoice
        name="past_diseases_choice"
        options={[
          "Poważne urazy głowy",
          "Zapalenia w obrębie CSN",
          "Epizody drgawkowe",
        ]}
        selected={values.past_diseases_choice}
      />
      <FormField
        name="past_diseases"
        onChangeText={handleChange("past_diseases")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("past_diseases")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.past_diseases}
      />
      <Text style={styles.subtitleText}>Przebieg dotychczasowego leczenia</Text>
      <Text style={styles.listItemFieldText}>
        W przeszłości pacjent {"  "}_____{"  "} psychiatrycznie
      </Text>
      <PastPsychiatricTreatment
        name="past_psychiatric_treatment"
        leftText="leczył się"
        rightText="nie leczył się"
        defaultOption={!!values.past_psychiatric_treatment}
      />
      <FillForm
        name="first_hospitalization"
        onChangeText={handleChange("first_hospitalization")}
        placeholder="rok"
        labelText="Pierwszy raz przyjęty w:"
        onBlur={handleBlur("first_hospitalization")}
        keyboardType="numeric"
        editable={!!values.past_psychiatric_treatment !== false}
        value={values.first_hospitalization}
      />
      <FillForm
        name="hospitalization_times"
        onChangeText={handleChange("hospitalization_times")}
        placeholder={!!values.past_psychiatric_treatment ? "ilość razy" : "0"}
        labelText="Liczba hospitalizacji:      "
        onBlur={handleBlur("hospitalization_times")}
        keyboardType="numeric"
        editable={values.past_psychiatric_treatment !== false}
        value={!!values.past_psychiatric_treatment === false ? "0" : `${values.hospitalization_times}`}
      />
      <Text style={styles.listItemFieldText}>{"> "} farmakoterapia</Text>
      <FormField
        name="pharmacotherapy"
        onChangeText={handleChange("pharmacotherapy")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("pharmacotherapy")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.pharmacotherapy}
      />
      <Text style={styles.listItemFieldText}>{"> "} psychoterapia</Text>
      <FormField
        name="psychotherapy"
        onChangeText={handleChange("psychotherapy")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("psychotherapy")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.psychotherapy}
      />
      <Text style={styles.listItemFieldText}>{"> "} terapia rodzin</Text>
      <FormField
        name="family_therapy"
        onChangeText={handleChange("family_therapy")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("family_therapy")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.family_therapy}
      />
      <Text style={styles.subtitleText}>Stosowane leki</Text>
      <Text style={styles.commentFieldText}>
        (z uwzględnieniem wszystkich leków przyjmowanych obecnie)
      </Text>
      <FormField
        name="medications"
        onChangeText={handleChange("medications")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("medications")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.medications}
      />
      <Text style={styles.subtitleText}>Uczulenia i osobnicze reakcje</Text>
      <FormField
        name="allergies"
        onChangeText={handleChange("allergies")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("allergies")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.allergies}
      />
      <Text style={styles.subtitleText}>Ocena stanu społecznego</Text>
      <Text style={styles.listItemFieldText}>{"> "} higiena</Text>
      <FormField
        name="hygiene"
        onChangeText={handleChange("hygiene")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("hygiene")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.hygiene}
      />
      <Text style={styles.listItemFieldText}>{"> "} poziom wykształcenia</Text>
      <RadioButton
        name="education_choice"
        options={[
          "podstawowe",
          "gimnazjum",
          "średnie",
          "maturalne",
          "wyższe",
          "doktorat",
          "habilitacja",
          "profesura",
        ]}
        defaultOption={values.education_choice}
      />
      <FormField
        name="education"
        onChangeText={handleChange("education")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("education")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.education}
      />
      <Text style={styles.listItemFieldText}>{"> "} status zawodowy</Text>
      <FormField
        name="professional_status"
        onChangeText={handleChange("professional_status")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("professional_status")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.professional_status}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} warunki socjalne, materialne, mieszkaniowe
      </Text>
      <FormField
        name="social_conditions"
        onChangeText={handleChange("social_conditions")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("social_conditions")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.social_conditions}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} korzystanie z pomocy społecznej
      </Text>
      <Select
        name="social_assistance_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.social_assistance_choice}
      />
      <FormField
        name="social_assistance"
        onChangeText={handleChange("social_assistance")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("social_assistance")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.social_assistance}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} zmiany poziomu funkcjonowania społecznego
      </Text>
      <FormField
        name="social_level_changes"
        onChangeText={handleChange("social_level_changes")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("social_level_changes")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.social_level_changes}
      />
      <Text style={styles.subtitleText}>Wywiad rodzinny i rozwojowy</Text>
      <Text style={styles.listItemFieldText}>
        {"> "} istotne dane rozwojowe
      </Text>
      <FormField
        name="development_data"
        onChangeText={handleChange("development_data")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("development_data")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.development_data}
      />
      <Text style={styles.listItemFieldText}>{"> "} sytuacja rodzinna</Text>
      <FormField
        name="family_situation"
        onChangeText={handleChange("family_situation")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("family_situation")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.family_situation}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} zmiany sytuacji rodzinnej na przestrzeni ostatnich lat
      </Text>
      <FormField
        name="family_situation_changes"
        onChangeText={handleChange("family_situation_changes")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("family_situation_changes")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.family_situation_changes}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} relacje rodzinne z uwzględnieniem więzi i obszarów konfliktowych
      </Text>
      <FormField
        name="family_relationships"
        onChangeText={handleChange("family_relationships")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("family_relationships")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.family_relationships}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} obciążenia dziedziczne
      </Text>
      <Text style={styles.commentFieldText}>
        (w tym zwłaszcza chorobami psychicznymi, uzależnieniami, myślami i
        tendencjami suicydalnymi lub homicydalnymi)
      </Text>
      <FormField
        name="hereditary_taint"
        onChangeText={handleChange("hereditary_taint")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("hereditary_taint")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.hereditary_taint}
      />
      <Text style={styles.subtitleText}>Wywiad środowiskowy</Text>
      <Text style={styles.listItemFieldText}>
        {"> "} poziom aktywności fizycznej
      </Text>
      <FormField
        name="physical_activity"
        onChangeText={handleChange("physical_activity")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("physical_activity")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.physical_activity}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} samouszkodzenia w wywiadzie
      </Text>
      <FormField
        name="self_mutilation"
        onChangeText={handleChange("self_mutilation")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("self_mutilation")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.self_mutilation}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} narażenie na zagrożenie zawodowe
      </Text>
      <FormField
        name="occupational_exposure"
        onChangeText={handleChange("occupational_exposure")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("occupational_exposure")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.occupational_exposure}
      />
      <Text style={styles.subtitleText}>Używki</Text>
      <Text style={styles.listItemFieldText}>{"> "} alkohol</Text>
      <FormField
        name="alcohol"
        onChangeText={handleChange("alcohol")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("alcohol")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.alcohol}
      />
      <Text style={styles.listItemFieldText}>{"> "} nikotyna</Text>
      <FormField
        name="nicotine"
        onChangeText={handleChange("nicotine")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("nicotine")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.nicotine}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} nielegalne substancje psychoaktywne
      </Text>
      <FormField
        name="psychoactive_substances"
        onChangeText={handleChange("psychoactive_substances")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("psychoactive_substances")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.psychoactive_substances}
      />
      <Text style={styles.subtitleText}>Dieta</Text>
      <RadioButton
        name="diet_choice"
        options={[
          "pacjent nie przestrzega żadnych zasad dietetycznych",
          "w wywiadzie istotne błędy dietetyczne",
          "nadmierna podaż kaloryczna",
          "niedostateczna podaż kaloryczna",
          "dieta uboga",
          "dieta cukrzycowa",
          "dieta niskotłuszczowa",
          "dieta oszczędzająca",
          "dieta bezmięsna",
          "pacjent stosuje dietę zgodną z zaleceniami lekarskimi",
          "pacjent cierpi na zaburzenia odżywiania w istotny sposób zaburzające codzienną dietę",
          "pacjent nie przestrzega zaleceń lekarskich co do diety",
          "dieta zgodna z wyznawaną religią i światopoglądem",
        ]}
        defaultOption={values.diet_choice}
      />
      <FormField
        name="diet"
        onChangeText={handleChange("diet")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("diet")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.diet}
      />
      <Text style={styles.subtitleText}>Wywiad od rodziny</Text>
      <FormField
        name="family_interview"
        onChangeText={handleChange("family_interview")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("family_interview")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.family_interview}
      />
    </>
  );
};

const styles = formStyles;

BasicDataForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.shape({
    reason_of_report: PropTypes.string,
    major_ailments: PropTypes.string,
    suicidal_thoughts_choice: PropTypes.bool,
    suicidal_thoughts: PropTypes.string,
    other_ailments: PropTypes.string,
    past_diseases_choice: PropTypes.string,
    past_diseases: PropTypes.string,
    past_psychiatric_treatment: PropTypes.bool.isRequired,
    first_hospitalization: PropTypes.string,
    hospitalization_times: PropTypes.string,
    pharmacotherapy: PropTypes.string,
    psychotherapy: PropTypes.string,
    family_therapy: PropTypes.string,
    medications: PropTypes.string,
    allergies: PropTypes.string,
    hygiene: PropTypes.string,
    education_choice: PropTypes.string,
    education: PropTypes.string,
    professional_status: PropTypes.string,
    social_conditions: PropTypes.string,
    social_assistance_choice: PropTypes.number,
    social_assistance: PropTypes.string,
    social_level_changes: PropTypes.string,
    development_data: PropTypes.string,
    family_situation: PropTypes.string,
    family_situation_changes: PropTypes.string,
    family_relationships: PropTypes.string,
    hereditary_taint: PropTypes.string,
    physical_activity: PropTypes.string,
    self_mutilation: PropTypes.string,
    occupational_exposure: PropTypes.string,
    alcohol: PropTypes.string,
    nicotine: PropTypes.string,
    psychoactive_substances: PropTypes.string,
    diet_choice: PropTypes.string,
    diet: PropTypes.string,
    family_interview: PropTypes.string,
  }).isRequired,
};
export default BasicDataForm;
