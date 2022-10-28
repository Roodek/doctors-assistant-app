import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import RadioButton from "./fields/RadioButton";
import FormField from "./fields/FormField";
import Select from "./fields/Select";
import CheckboxForm from "./fields/CheckboxForm";
import MultiChoice from "./fields/MultiChoice";
import formStyles from "../../constants/styles/formStyles";

const PhysicalExaminationForm = ({ handleChange, handleBlur, values }) => {
  return (
    <>
      <Text style={styles.subtitleText}>Stan ogólny</Text>
      <RadioButton
        name="general_conditions"
        options={["dobry", "średni", "ciężki"]}
        defaultOption={values.general_conditions}
      />
      <Text style={styles.listItemFieldText}>{"> "} ciśnienie tętnicze</Text>
      <FormField
        name="blood_pressure"
        onChangeText={handleChange("blood_pressure")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("blood_pressure")}
        keyboardType="phone-pad"
        multiline
        numberOfLines={2}
        value={values.blood_pressure}
      />
      <Text style={styles.listItemFieldText}>{"> "} tętno</Text>
      <FormField
        name="pulse"
        onChangeText={handleChange("pulse")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("pulse")}
        keyboardType="numeric"
        multiline
        numberOfLines={2}
        value={values.pulse}
      />
      <Text style={styles.listItemFieldText}>{"> "} ciepłota ciała</Text>
      <FormField
        name="body_temperature"
        onChangeText={handleChange("body_temperature")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("body_temperature")}
        keyboardType="numeric"
        multiline
        numberOfLines={2}
        value={values.body_temperature}
      />
      <Text style={styles.subtitleText}>Budowa ciała</Text>
      <RadioButton
        name="body_build_type"
        options={["normosteniczna", "hyposteniczna", "hypersteniczna"]}
        defaultOption={values.body_build_type}
      />
      <Text style={styles.subtitleText}>Skóra i tkanka podskórna</Text>
      <Text style={styles.listItemFieldText}>{"> "} wygląd</Text>
      <FormField
        name="skin_appearance"
        onChangeText={handleChange("skin_appearance")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("skin_appearance")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.skin_appearance}
      />
      <Text style={styles.listItemFieldText}>{"> "} barwa</Text>
      <FormField
        name="skin_colour"
        onChangeText={handleChange("skin_colour")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("skin_colour")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.skin_colour}
      />
      <Text style={styles.listItemFieldText}>{"> "} wilgotność</Text>
      <FormField
        name="skin_humidity"
        onChangeText={handleChange("skin_humidity")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("skin_humidity")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.skin_humidity}
      />
      <Text style={styles.listItemFieldText}>{"> "} obrzęki</Text>
      <FormField
        name="skin_swelling"
        onChangeText={handleChange("skin_swelling")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("skin_swelling")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.skin_swelling}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} blizny i ślady po samouszkodzeniach
      </Text>
      <FormField
        name="skin_scars"
        onChangeText={handleChange("skin_scars")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("skin_scars")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.skin_scars}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} obwodowe węzły chłonne
      </Text>
      <Select
        name="lymphatic_gland_examined"
        leftText="badalne"
        rightText="niebadalne"
        defaultOption={values.lymphatic_gland_examined}
      />
      <Text style={styles.subtitleText}>Głowa</Text>
      <Text style={styles.listItemFieldText}>{"> "} wygląd</Text>
      <CheckboxForm
        name="head_appearance_choice"
        text="wysklepiona symetrycznie, prawidłowo"
        style={styles.choice}
        defaultOption={values.head_appearance_choice}
      />
      <FormField
        name="head_appearance"
        onChangeText={handleChange("head_appearance")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("head_appearance")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.head_appearance}
      />
      <Text style={styles.listItemFieldText}>{"> "} bolesność opukowo</Text>
      <FormField
        name="head_percussion_tenderness"
        onChangeText={handleChange("head_percussion_tenderness")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("head_percussion_tenderness")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.head_percussion_tenderness}
      />
      <Text style={styles.listItemFieldText}>{"> "} gałki oczne</Text>
      <Text style={styles.commentFieldText}>
        (osadzenie, ruchomość, źrenice - symetria)
      </Text>
      <FormField
        name="head_eyeballs"
        onChangeText={handleChange("head_eyeballs")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("head_eyeballs")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.head_eyeballs}
      />
      <Text style={styles.listItemFieldText}>{"> "} uszy</Text>
      <FormField
        name="ears"
        onChangeText={handleChange("ears")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("ears")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.ears}
      />
      <Text style={styles.listItemFieldText}>{"> "} nos</Text>
      <Text style={styles.commentFieldText}>(drożność, wycieki)</Text>
      <FormField
        name="nose"
        onChangeText={handleChange("nose")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("nose")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.nose}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} jama ustna i uzębienie
      </Text>
      <RadioButton
        name="mouth_teeth"
        options={["nieuporządkowane", "uporządkowane", "zaprotezowane"]}
        defaultOption={values.mouth_teeth}
      />
      <Text style={styles.listItemFieldText}>{"> "} błony śluzowe</Text>
      <MultiChoice
        name="mucous_membrane_choice"
        options={["różowe", "wilgotne"]}
        selected={values.mucous_membrane_choice}
      />
      <FormField
        name="mucous_membrane"
        onChangeText={handleChange("mucous_membrane")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("mucous_membrane")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.mucous_membrane}
      />
      <Text style={styles.listItemFieldText}>{"> "} gardło i migdałki</Text>
      <FormField
        name="neck_throat_tonsil"
        onChangeText={handleChange("neck_throat_tonsil")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("neck_throat_tonsil")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.neck_throat_tonsil}
      />
      <Text style={styles.subtitleText}>Szyja</Text>
      <Text style={styles.listItemFieldText}>{"> "} wygląd</Text>
      <FormField
        name="neck_appearance"
        onChangeText={handleChange("neck_appearance")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("neck_appearance")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.neck_appearance}
      />
      <Text style={styles.listItemFieldText}>{"> "} tarczyca</Text>
      <MultiChoice
        name="neck_thyroid_choice"
        options={["powiększona", "niepowiększona", "ruchoma połykowo"]}
        selected={values.neck_thyroid_choice}
      />
      <FormField
        name="neck_thyroid"
        onChangeText={handleChange("neck_thyroid")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("neck_thyroid")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.neck_thyroid}
      />
      <Text style={styles.subtitleText}>Klatka piersiowa</Text>
      <MultiChoice
        name="chest_choice"
        options={[
          "wysklepiona symetrycznie",
          "wysklepiona niesymetrycznie",
          "ruchoma oddechowo",
        ]}
        selected={values.chest_choice}
      />
      <FormField
        name="chest"
        onChangeText={handleChange("chest")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("chest")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.chest}
      />
      <Text style={styles.listItemFieldText}>{"> "} częstość oddechów/min</Text>
      <FormField
        name="breath_frequency"
        onChangeText={handleChange("breath_frequency")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("breath_frequency")}
        keyboardType="numeric"
        multiline
        numberOfLines={2}
        value={values.breath_frequency}
      />
      <Text style={styles.listItemFieldText}>{"> "} opukiwanie</Text>
      <RadioButton
        name="chest_percussion_choice"
        options={["wypuk jawny", "wypuk stłumiony"]}
        defaultOption={values.chest_percussion_choice}
      />
      <FormField
        name="chest_percussion"
        onChangeText={handleChange("chest_percussion")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("chest_percussion")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.chest_percussion}
      />
      <Text style={styles.listItemFieldText}>{"> "} osłuchiwanie</Text>
      <CheckboxForm
        name="chest_auscultation_choice"
        text="nad polami płucnymi osłuchowo szmery oddechowe prawidłowe"
        style={styles.choice}
        defaultOption={values.chest_auscultation_choice}
      />
      <FormField
        name="chest_auscultation"
        onChangeText={handleChange("chest_auscultation")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("chest_auscultation")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.chest_auscultation}
      />
      <Text style={styles.subtitleText}>Układ krążenia</Text>
      <Text style={styles.listItemFieldText}>{"> "} oglądanie</Text>
      <Text style={styles.commentFieldText}>
        (tętnienia, uderzenie koniuszkowe)
      </Text>
      <FormField
        name="cardiovascular_appearance"
        onChangeText={handleChange("cardiovascular_appearance")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("cardiovascular_appearance")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.cardiovascular_appearance}
      />
      <Text style={styles.listItemFieldText}>{"> "} wydolny</Text>
      <FormField
        name="cardiovascular_efficient"
        onChangeText={handleChange("cardiovascular_efficient")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("cardiovascular_efficient")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.cardiovascular_efficient}
      />
      <Text style={styles.listItemFieldText}>{"> "} osłuchiwano</Text>
      <Text style={styles.commentFieldText}>
        (miarowość, tony czyste, bez szmerów patologicznych)
      </Text>
      <FormField
        name="cardiovascular_auscultation"
        onChangeText={handleChange("cardiovascular_auscultation")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("cardiovascular_auscultation")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.cardiovascular_auscultation}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} tętno na tt. promieniowych i grzbietowych stopy zgodne z akcją
        serca
      </Text>
      <Select
        name="cardiovascular_pulse_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.cardiovascular_pulse_choice}
      />
      <FormField
        name="cardiovascular_pulse"
        onChangeText={handleChange("cardiovascular_pulse")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("cardiovascular_pulse")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.cardiovascular_pulse}
      />
      <Text style={styles.subtitleText}>Brzuch</Text>
      <RadioButton
        name="stomach"
        options={[
          "wysklepiony w poziomie klp",
          "wysklepiony ponad poziom klp",
          "poniżej poziomu klp",
        ]}
        defaultOption={values.stomach}
      />
      <Text style={styles.listItemFieldText}>{"> "} przepukliny</Text>
      <FormField
        name="stomach_hernia"
        onChangeText={handleChange("stomach_hernia")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("stomach_hernia")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.stomach_hernia}
      />
      <Text style={styles.listItemFieldText}>{"> "} niebolesny</Text>
      <FormField
        name="stomach_painless"
        onChangeText={handleChange("stomach_painless")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("stomach_painless")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.stomach_painless}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} osłuchowo perystaltyka
      </Text>
      <FormField
        name="stomach_auscultation"
        onChangeText={handleChange("stomach_auscultation")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("stomach_auscultation")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.stomach_auscultation}
      />
      <Text style={styles.listItemFieldText}>{"> "} opukiwanie</Text>
      <FormField
        name="stomach_percussion"
        onChangeText={handleChange("stomach_percussion")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("stomach_percussion")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.stomach_percussion}
      />
      <Text style={styles.listItemFieldText}>{"> "} badanie dotykiem</Text>
      <Text style={styles.commentFieldText}>
        (bez oporów patologicznych, wątroba, śledziona niebadalna)
      </Text>
      <FormField
        name="stomach_physical_examination"
        onChangeText={handleChange("stomach_physical_examination")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("stomach_physical_examination")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.stomach_physical_examination}
      />
      <Text style={styles.listItemFieldText}>{"> "} objawy</Text>
      <Text style={styles.commentFieldText}>
        (otrzewnowe, Goldflamma, Chełmońskiego)
      </Text>
      <FormField
        name="stomach_symptoms"
        onChangeText={handleChange("stomach_symptoms")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("stomach_symptoms")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.stomach_symptoms}
      />
      <Text style={styles.subtitleText}>Kończyny dolne</Text>
      <Text style={styles.listItemFieldText}>{"> "} obrzęki</Text>
      <FormField
        name="legs_swelling"
        onChangeText={handleChange("legs_swelling")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("legs_swelling")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.legs_swelling}
      />
      <Text style={styles.listItemFieldText}>{"> "} układ żylny</Text>
      <FormField
        name="legs_veins"
        onChangeText={handleChange("legs_veins")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("legs_veins")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.legs_veins}
      />
      <Text style={styles.subtitleText}>Układ ruchowy</Text>
      <Text style={styles.listItemFieldText}>{"> "} obrysy stawów</Text>
      <Select
        name="locomotor_joint_outline"
        leftText="prawidłowe"
        rightText="nieprawidłowe"
        defaultOption={values.locomotor_joint_outline}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} ruchomość bierna i czynna w stawach kończyn
      </Text>
      <Select
        name="locomotor_limb_mobility"
        leftText="prawidłowe"
        rightText="nieprawidłowe"
        defaultOption={values.locomotor_limb_mobility}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} siła i napięcie mięśniowe
      </Text>
      <Select
        name="muscle_strength_tension"
        leftText="prawidłowe"
        rightText="nieprawidłowe"
        defaultOption={values.muscle_strength_tension}
      />
      <Text style={styles.subtitleText}>Układ nerwowy</Text>
      <Text style={styles.listItemFieldText}>{"> "} objawy oponowe</Text>
      <FormField
        name="nervous_meningeal_signs"
        onChangeText={handleChange("nervous_meningeal_signs")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("nervous_meningeal_signs")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.nervous_meningeal_signs}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} objawy ogniskowego uszkodzenia systemu nerwowego
      </Text>
      <FormField
        name="nervous_focal_damage"
        onChangeText={handleChange("nervous_focal_damage")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("nervous_focal_damage")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.nervous_focal_damage}
      />
    </>
  );
};

const styles = formStyles;

PhysicalExaminationForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.shape({
    general_conditions: PropTypes.string,
    blood_pressure: PropTypes.string,
    pulse: PropTypes.string,
    body_temperature: PropTypes.string,
    body_build_type: PropTypes.string,
    skin_appearance: PropTypes.string,
    skin_colour: PropTypes.string,
    skin_humidity: PropTypes.string,
    skin_swelling: PropTypes.string,
    skin_scars: PropTypes.string,
    lymphatic_gland_examined: PropTypes.bool,
    head_appearance_choice: PropTypes.bool,
    head_appearance: PropTypes.string,
    head_percussion_tenderness: PropTypes.string,
    head_eyeballs: PropTypes.string,
    ears: PropTypes.string,
    nose: PropTypes.string,
    mouth_teeth: PropTypes.string,
    mucous_membrane_choice: PropTypes.string,
    mucous_membrane: PropTypes.string,
    neck_throat_tonsil: PropTypes.string,
    neck_appearance: PropTypes.string,
    neck_thyroid_choice: PropTypes.string,
    neck_thyroid: PropTypes.string,
    chest_choice: PropTypes.string,
    chest: PropTypes.string,
    breath_frequency: PropTypes.string,
    chest_percussion_choice: PropTypes.string,
    chest_percussion: PropTypes.string,
    chest_auscultation_choice: PropTypes.bool,
    chest_auscultation: PropTypes.string,
    cardiovascular_appearance: PropTypes.string,
    cardiovascular_efficient: PropTypes.string,
    cardiovascular_auscultation: PropTypes.string,
    cardiovascular_pulse_choice: PropTypes.bool,
    cardiovascular_pulse: PropTypes.string,
    stomach: PropTypes.string,
    stomach_hernia: PropTypes.string,
    stomach_painless: PropTypes.string,
    stomach_auscultation: PropTypes.string,
    stomach_percussion: PropTypes.string,
    stomach_physical_examination: PropTypes.string,
    stomach_symptoms: PropTypes.string,
    legs_swelling: PropTypes.string,
    legs_veins: PropTypes.string,
    locomotor_joint_outline: PropTypes.bool,
    locomotor_limb_mobility: PropTypes.bool,
    muscle_strength_tension: PropTypes.bool,
    nervous_meningeal_signs: PropTypes.string,
    nervous_focal_damage: PropTypes.string,
  }).isRequired,
};

export default PhysicalExaminationForm;
