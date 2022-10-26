import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import FormField from "./fields/FormField";
import MultiChoice from "./fields/MultiChoice";
import Select from "./fields/Select";
import CheckboxForm from "./fields/CheckboxForm";
import RadioButton from "./fields/RadioButton";
import formStyles from "../../constants/styles/formStyles";

const PsychiatricAssessmentForm = ({ handleChange, handleBlur, values }) => {
  return (
    <>
      <Text style={styles.subtitleText}>Wygląd</Text>
      <Text style={styles.listItemFieldText}>
        {"> "} ogólny wygląd badanego
      </Text>
      <FormField
        name="general_appearance"
        onChangeText={handleChange("general_appearance")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("general_appearance")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.general_appearance}
      />
      <Text style={styles.listItemFieldText}>{"> "} strój</Text>
      <MultiChoice
        name="outfit_choice"
        options={[
          "bez istotnych cech charaktery­stycznych (adekwatny, zadbany, czysty, schludny)",
          "nieadekwatny",
          "zaniedbany",
          "nadmiernie wyrazisty, kolorowy",
        ]}
        selected={values.outfit_choice}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} stopień zadbania o wygląd
      </Text>
      <FormField
        name="appearance_care"
        onChangeText={handleChange("appearance_care")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("appearance_care")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.appearance_care}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} wszystkie niezwykłe cechy lub gesty
      </Text>
      <FormField
        name="unusual_features_gestures"
        onChangeText={handleChange("unusual_features_gestures")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("unusual_features_gestures")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.unusual_features_gestures}
      />
      <Text style={styles.subtitleText}>Relacja z badającym</Text>
      <Text style={styles.listItemFieldText}>
        {"> "} czy chętnie zgadza się na badanie?
      </Text>
      <Select
        name="agree_examination_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.agree_examination_choice}
      />
      <FormField
        name="agree_examination"
        onChangeText={handleChange("agree_examination")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("agree_examination")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.agree_examination}
      />
      <Text style={styles.listItemFieldText}>{"> "} czy jest ufny?</Text>
      <Select
        name="trusting_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.trusting_choice}
      />
      <FormField
        name="trusting"
        onChangeText={handleChange("trusting")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("trusting")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.trusting}
      />
      <Text style={styles.listItemFieldText}>{"> "} czy jest agresywny?</Text>
      <Select
        name="aggressive_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.aggressive_choice}
      />
      <FormField
        name="aggressive"
        onChangeText={handleChange("aggressive")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("aggressive")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.aggressive}
      />
      <Text style={styles.listItemFieldText}>{"> "} czy skraca dystans?</Text>
      <Select
        name="distance_shorten_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.distance_shorten_choice}
      />
      <FormField
        name="distance_shorten"
        onChangeText={handleChange("distance_shorten")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("distance_shorten")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.distance_shorten}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} czy seksualizuje kontakt?
      </Text>
      <Select
        name="sexualizing_contact_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.sexualizing_contact_choice}
      />
      <FormField
        name="sexualizing_contact"
        onChangeText={handleChange("sexualizing_contact")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("sexualizing_contact")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.sexualizing_contact}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} czy łatwo się irytuje?
      </Text>
      <Select
        name="irritated_easily_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.irritated_easily_choice}
      />
      <FormField
        name="irritated_easily"
        onChangeText={handleChange("irritated_easily")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("irritated_easily")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.irritated_easily}
      />
      <Text style={styles.listItemFieldText}>{"> "} czy wzbudza lęk?</Text>
      <Select
        name="fear_cause_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.fear_cause_choice}
      />
      <FormField
        name="fear_cause"
        onChangeText={handleChange("fear_cause")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("fear_cause")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.fear_cause}
      />
      <Text style={styles.listItemFieldText}>{"> "} czy wzbudza irytację?</Text>
      <Select
        name="irritate_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.irritate_choice}
      />
      <FormField
        name="irritate"
        onChangeText={handleChange("irritate")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("irritate")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.irritate}
      />
      <Text style={styles.subtitleText}>Orientacja</Text>
      <Text style={styles.listItemFieldText}>
        {"> "} zachowana orientacja autopsychiczna
      </Text>
      <Select
        name="autopsychic_orientation_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.autopsychic_orientation_choice}
      />
      <FormField
        name="autopsychic_orientation"
        onChangeText={handleChange("autopsychic_orientation")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("autopsychic_orientation")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.autopsychic_orientation}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} zachowana orientacja allopsychiczna
      </Text>
      <Select
        name="allopsychic_orientation_choice"
        leftText="tak"
        rightText="nie"
        defaultOption={values.allopsychic_orientation_choice}
      />
      <FormField
        name="allopsychic_orientation"
        onChangeText={handleChange("allopsychic_orientation")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("allopsychic_orientation")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.allopsychic_orientation}
      />
      <Text style={styles.subtitleText}>Sposób odpowiadania na pytania</Text>
      <MultiChoice
        name="answer_questions_choice"
        options={[
          "bez uchwytnych trudności poznawczych",
          "trudności w rozumieniu pytań",
          "odpowiedzi zdawkowe",
          "odpowiedzi wyczerpujące",
          "pamięć prawidłowa",
          "trudność w przypominaniu faktów",
        ]}
        selected={values.answer_questions_choice}
      />
      <FormField
        name="answer_questions"
        onChangeText={handleChange("answer_questions")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("answer_questions")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.answer_questions}
      />
      <Text style={styles.subtitleText}>Mowa</Text>
      <Text style={styles.listItemFieldText}>{"> "} akcent</Text>
      <CheckboxForm
        name="accent_difficulties"
        text="bez uchwytnych trudności"
        style={styles.choice}
        defaultOption={values.accent_difficulties}
      />
      <FormField
        name="accent"
        onChangeText={handleChange("accent")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("accent")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.accent}
      />
      <Text style={styles.listItemFieldText}>{"> "} dialekt</Text>
      <CheckboxForm
        name="dialect_difficulties"
        text="bez uchwytnych trudności"
        style={styles.choice}
        defaultOption={values.dialect_difficulties}
      />
      <FormField
        name="dialect"
        onChangeText={handleChange("dialect")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("dialect")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.dialect}
      />
      <Text style={styles.listItemFieldText}>{"> "} szybkość mowy</Text>
      <CheckboxForm
        name="speech_speed_difficulties"
        text="bez uchwytnych trudności"
        style={styles.choice}
        defaultOption={values.speech_speed_difficulties}
      />
      <FormField
        name="speech_speed"
        onChangeText={handleChange("speech_speed")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("speech_speed")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.speech_speed}
      />
      <Text style={styles.listItemFieldText}>{"> "} ton mowy</Text>
      <CheckboxForm
        name="speech_tone_difficulties"
        text="bez uchwytnych trudności"
        style={styles.choice}
        defaultOption={values.speech_tone_difficulties}
      />
      <FormField
        name="speech_tone"
        onChangeText={handleChange("speech_tone")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("speech_tone")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.speech_tone}
      />
      <Text style={styles.listItemFieldText}>{"> "} upośledzenia mowy</Text>
      <CheckboxForm
        name="speech_impairment_difficulties"
        text="bez uchwytnych trudności"
        style={styles.choice}
        value={values.speech_impairment_difficulties}
      />
      <FormField
        name="speech_impairment"
        onChangeText={handleChange("speech_impairment")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("speech_impairment")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.speech_impairment}
      />
      <Text style={styles.listItemFieldText}>{"> "} cechy afazji</Text>
      <CheckboxForm
        name="aphasia_features_difficulties"
        text="bez uchwytnych trudności"
        style={styles.choice}
        defaultOption={values.aphasia_features_difficulties}
      />
      <FormField
        name="aphasia_features"
        onChangeText={handleChange("aphasia_features")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("aphasia_features")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.aphasia_features}
      />
      <Text style={styles.subtitleText}>
        Sposób poruszania się, przyjmowane pozy
      </Text>
      <MultiChoice
        name="moving_way_choice"
        options={["manieryzmy", "pobudzenie", "zahamowanie psychoruchowe"]}
        selected={values.moving_way_choice}
      />
      <FormField
        name="moving_way"
        onChangeText={handleChange("moving_way")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("moving_way")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.moving_way}
      />
      <Text style={styles.subtitleText}>Zaburzenia uwagi</Text>
      <RadioButton
        name="attention_disorders_choice"
        options={[
          "nie stwierdza się",
          "zaburzenia koncentracji uwagi",
          "poważne zaburzenia koncentra­cji uwagi",
        ]}
        defaultOption={values.attention_disorders_choice}
      />
      <FormField
        name="attention_disorders"
        onChangeText={handleChange("attention_disorders")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("attention_disorders")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.attention_disorders}
      />
      <Text style={styles.subtitleText}>Zaburzenia pamięci</Text>
      <MultiChoice
        name="memory_impairment_choice"
        options={[
          "nie stwierdza się",
          "znaczne zaburzenia pamięci",
          "nasilone zaburzenia pamięci",
          "zaburzenia zapamiętywania",
          "zaburzenia pamięci świeżej",
          "zaburzenia pamięci dawnej",
        ]}
        selected={values.memory_impairment_choice}
      />
      <FormField
        name="memory_impairment"
        onChangeText={handleChange("memory_impairment")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("memory_impairment")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.memory_impairment}
      />
      <Text style={styles.subtitleText}>Nastrój</Text>
      <RadioButton
        name="mood_choice"
        options={[
          "wyrównany",
          "nieznacznie obniżony",
          "obniżony",
          "znacznie obniżony",
          "nieznacznie podwyższony",
          "podwyższony",
          "znacznie podwyższony",
          "dysforyczny",
        ]}
        defaultOption={values.mood_choice}
      />
      <FormField
        name="mood"
        onChangeText={handleChange("mood")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("mood")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.mood}
      />
      <Text style={styles.subtitleText}>Napęd psychoruchowy</Text>
      <RadioButton
        name="psychomotor_drive_choice"
        options={[
          "wyrównany",
          "nieznacznie obniżony",
          "obniżony",
          "znacznie obniżony",
          "nieznacznie podwyższony",
          "podwyższony",
          "znacznie podwyższony",
        ]}
        defaultOption={values.psychomotor_drive_choice}
      />
      <FormField
        name="psychomotor_drive"
        onChangeText={handleChange("psychomotor_drive")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("psychomotor_drive")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.psychomotor_drive}
      />
      <Text style={styles.subtitleText}>Afekt</Text>
      <MultiChoice
        name="affect_choice"
        options={[
          "dostosowany",
          "niedostosowany",
          "żywy/prawidłowo modulowany",
          "blady",
          "stępiały",
          "płaski",
          "labilny",
        ]}
        selected={values.affect_choice}
      />
      <FormField
        name="affect"
        onChangeText={handleChange("affect")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("affect")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.affect}
      />
      <Text style={styles.subtitleText}>Lęk</Text>
      <Text style={styles.listItemFieldText}>{"> "} niepokój</Text>
      <MultiChoice
        name="anxiety_choice"
        options={[
          "nie stwierdza się",
          "lęk wolno płynący",
          "lęk napadowy",
          "lęk fobijny",
          "somatyczne objawy lęku",
          "zaznaczony niepokój psycho­ruchowy",
        ]}
        selected={values.anxiety_choice}
      />
      <FormField
        name="anxiety"
        onChangeText={handleChange("anxiety")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("anxiety")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.anxiety}
      />
      <Text style={styles.subtitleText}>Zaburzenia treści myślenia</Text>
      <Text style={styles.listItemFieldText}>{"> "} urojenia</Text>
      <MultiChoice
        name="delusions_choice"
        options={[
          "nie stwierdza się",
          "winy i grzeszności",
          "niższości",
          "zubożenia",
          "nihilistyczne",
          "hipochondryczne",
          "owładnięcia",
          "kontroli",
          "oddziaływania (wpływu)",
          "nasyłanie myśli",
          "odciąganie (zabieranie) myśli",
          "rozgłaśnianie (odsłonięcie) myśli",
          "wielkościowe",
          "odnoszące (ksobne)",
          "prześladowcze",
          "niewierności małżeńskiej",
          "urojeniowa zazdrość",
          "erotyczne, zakochania",
          "religijne i posłannicze",
          "natręctwa (obsesje)",
          "idee nadwartościowe",
        ]}
        selected={values.delusions_choice}
      />
      <FormField
        name="delusions"
        onChangeText={handleChange("delusions")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("delusions")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.delusions}
      />
      <Text style={styles.subtitleText}>Zaburzenia spostrzegania</Text>
      <Text style={styles.listItemFieldText}>
        {"> "} halucynacje, pseudohalucyjnacje
      </Text>
      <MultiChoice
        name="hallucinations_choice"
        options={[
          "nie stwierdza się",
          "słuchowe",
          "głosy komentujące",
          "głosy prowadzące dialog",
          "ugłośnienie myśli",
          "echo myśli",
          "wzrokowe",
          "fotopsje",
          "węchowe",
          "dotykowe",
          "smakowe",
          "czucia ustrojowego",
          "parahalucynacje (halucynoidy)",
          "hipnagogiczne",
          "hipnapompiczne",
          "depersonalizacje",
          "derealizacje",
        ]}
        selected={values.hallucinations_choice}
      />
      <FormField
        name="hallucinations"
        onChangeText={handleChange("hallucinations")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("hallucinations")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.hallucinations}
      />
      <Text style={styles.listItemFieldText}>{"> "} iluzje</Text>
      <MultiChoice
        name="illusions_choice"
        options={[
          "nie stwierdza się",
          "słuchowe",
          "wzrokowe",
          "węchowe",
          "dotykowe",
          "smakowe",
          "czucia ustrojowego",
        ]}
        selected={values.illusions_choice}
      />
      <FormField
        name="illusions"
        onChangeText={handleChange("illusions")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("illusions")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.illusions}
      />
      <Text style={styles.listItemFieldText}>{"> "} inne</Text>
      <MultiChoice
        name="perception_disorders_choice"
        options={["nie stwierdza się", "pareidolie", "makropsje", "mikropsje"]}
        selected={values.perception_disorders_choice}
      />
      <FormField
        name="perception_disorders"
        onChangeText={handleChange("perception_disorders")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("perception_disorders")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.perception_disorders}
      />
      <Text style={styles.subtitleText}>Zaburzenia toku myślenia</Text>
      <MultiChoice
        name="abnormal_thinking_choice"
        options={[
          "nie stwierdza się",
          "przyspieszenie",
          "spowolnienie",
          "otamowanie",
          "niedokojarzenie",
          "rozkojarzenie",
          "splątanie",
          "perseweracje",
          "werbigeracje",
          "ambiwalencja",
          "zorientowany na cela badania",
          "dygresyjny",
          "nadmiernie szczegółowy",
          "zahamowania",
          "echolalie",
          "gonitwa myśli",
          "dezorganizacja myślenia",
        ]}
        selected={values.abnormal_thinking_choice}
      />
      <FormField
        name="abnormal_thinking"
        onChangeText={handleChange("abnormal_thinking")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("abnormal_thinking")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.abnormal_thinking}
      />
      <Text style={styles.subtitleText}>Zaburzenia krytycyzmu i wyglądu</Text>
      <MultiChoice
        name="criticism_disturbance_choice"
        options={[
          "zachowany wgląd i krytycyzm",
          "częściowo zachowany wgląd i krytycyzm",
          "brak wglądu i bezkrytycyzm",
          "ego-dystoniczny charakter objawów",
          "ego-syntoniczny charakter objawów",
        ]}
        selected={values.criticism_disturbance_choice}
      />
      <FormField
        name="criticism_disturbance"
        onChangeText={handleChange("criticism_disturbance")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("criticism_disturbance")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.criticism_disturbance}
      />
      <Text style={styles.subtitleText}>Aktywność złożona</Text>
      <MultiChoice
        name="complex_activity_choice"
        options={[
          "natrętne czynności (kompulsje)",
          "automatyzmy",
          "stereotypie",
          "manieryzmy",
        ]}
        selected={values.complex_activity_choice}
      />
      <FormField
        name="complex_activity"
        onChangeText={handleChange("complex_activity")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("complex_activity")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.complex_activity}
      />
      <Text style={styles.subtitleText}>Parakinezy katatoniczne</Text>
      <MultiChoice
        name="catatonic_parakinesis_choice"
        options={[
          "zastyganie",
          "stupor",
          "gibkość woskowa",
          "negatywizm czynny",
          "negatywizm bierny",
          "sztywność",
        ]}
        selected={values.catatonic_parakinesis_choice}
      />
      <FormField
        name="catatonic_parakinesis"
        onChangeText={handleChange("catatonic_parakinesis")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("catatonic_parakinesis")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.catatonic_parakinesis}
      />
      <Text style={styles.subtitleText}>
        Ocena pozostałych funkcji poznawczych
      </Text>
      <Text style={styles.listItemFieldText}>{"> "} zapamiętywanie</Text>
      <Text style={styles.commentFieldText}>
        (w wypadku podejrzenia otępienia)
      </Text>
      <CheckboxForm
        name="memorizing_difficulties"
        text="bez uchwytnych trudności"
        style={styles.choice}
        defaultOption={values.memorizing_difficulties}
      />
      <FormField
        name="memorizing"
        onChangeText={handleChange("memorizing")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("memorizing")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.memorizing}
      />
      <Text style={styles.listItemFieldText}>{"> "} uwaga i liczenie</Text>
      <Text style={styles.commentFieldText}>
        (w wypadku podejrzenia otępienia)
      </Text>
      <CheckboxForm
        name="attention_counting_difficulties"
        text="bez uchwytnych trudności"
        style={styles.choice}
        defaultOption={values.attention_counting_difficulties}
      />
      <FormField
        name="attention_counting"
        onChangeText={handleChange("attention_counting")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("attention_counting")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.attention_counting}
      />
      <Text style={styles.listItemFieldText}>{"> "} przypominanie</Text>
      <Text style={styles.commentFieldText}>
        (w wypadku podejrzenia otępienia)
      </Text>
      <CheckboxForm
        name="reminding_difficulties"
        text="bez uchwytnych trudności"
        style={styles.choice}
        defaultOption={values.reminding_difficulties}
      />
      <FormField
        name="reminding"
        onChangeText={handleChange("reminding")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("reminding")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.reminding}
      />
      <Text style={styles.listItemFieldText}>{"> "} zdolności językowe</Text>
      <Text style={styles.commentFieldText}>
        (w wypadku podejrzenia otępienia)
      </Text>
      <CheckboxForm
        name="language_skills_difficulties"
        text="bez uchwytnych trudności"
        style={styles.choice}
        defaultOption={values.language_skills_difficulties}
      />
      <FormField
        name="language_skills"
        onChangeText={handleChange("language_skills")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("language_skills")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.language_skills}
      />
      <Text style={styles.subtitleText}>
        Myśli i plany suicydalne lub homicydalne
      </Text>
      <Text style={styles.listItemFieldText}>{"> "} myśli rezygnacyjne</Text>
      <Select
        name="resignation_thoughts_choice"
        leftText="obecne"
        rightText="nieobecne"
        defaultOption={values.resignation_thoughts_choice}
      />
      <FormField
        name="resignation_thoughts"
        onChangeText={handleChange("resignation_thoughts")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("resignation_thoughts")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.resignation_thoughts}
      />
      <Text style={styles.listItemFieldText}>{"> "} myśli samobójcze</Text>
      <Select
        name="suicide_thoughts_choice"
        leftText="obecne"
        rightText="nieobecne"
        defaultOption={values.suicide_thoughts_choice}
      />
      <FormField
        name="suicide_thoughts"
        onChangeText={handleChange("suicide_thoughts")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("suicide_thoughts")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.suicide_thoughts}
      />
      <Text style={styles.listItemFieldText}>
        {"> "} plany i tendencje samobójcze
      </Text>
      <Select
        name="suicidal_plans_choice"
        leftText="obecne"
        rightText="nieobecne"
        defaultOption={values.suicidal_plans_choice}
      />
      <FormField
        name="suicidal_plans"
        onChangeText={handleChange("suicidal_plans")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("suicidal_plans")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.suicidal_plans}
      />
      <Text style={styles.listItemFieldText}>{"> "} fantazje o zabójstwie</Text>
      <Select
        name="murder_fantasies_choice"
        leftText="obecne"
        rightText="nieobecne"
        defaultOption={values.murder_fantasies_choice}
      />
      <FormField
        name="murder_fantasies"
        onChangeText={handleChange("murder_fantasies")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("murder_fantasies")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.murder_fantasies}
      />
      <Text style={styles.listItemFieldText}>{"> "} plany zabójstwa</Text>
      <Select
        name="murder_plans_choice"
        leftText="obecne"
        rightText="nieobecne"
        defaultOption={values.murder_plans_choice}
      />
      <FormField
        name="murder_plans"
        onChangeText={handleChange("murder_plans")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("murder_plans")}
        keyboardType="default"
        multiline
        numberOfLines={2}
        value={values.murder_plans}
      />
    </>
  );
};

const styles = formStyles;

PsychiatricAssessmentForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.shape({
    general_appearance: PropTypes.string,
    outfit_choice: PropTypes.string,
    appearance_care: PropTypes.string,
    unusual_features_gestures: PropTypes.string,
    agree_examination_choice: PropTypes.bool,
    agree_examination: PropTypes.string,
    trusting_choice: PropTypes.bool,
    trusting: PropTypes.string,
    aggressive_choice: PropTypes.bool,
    aggressive: PropTypes.string,
    distance_shorten_choice: PropTypes.bool,
    distance_shorten: PropTypes.string,
    sexualizing_contact_choice: PropTypes.bool,
    sexualizing_contact: PropTypes.string,
    irritated_easily_choice: PropTypes.bool,
    irritated_easily: PropTypes.string,
    fear_cause_choice: PropTypes.bool,
    fear_cause: PropTypes.string,
    irritate_choice: PropTypes.bool,
    irritate: PropTypes.string,
    autopsychic_orientation_choice: PropTypes.bool,
    autopsychic_orientation: PropTypes.string,
    allopsychic_orientation_choice: PropTypes.bool,
    allopsychic_orientation: PropTypes.string,
    answer_questions_choice: PropTypes.string,
    answer_questions: PropTypes.string,
    accent_difficulties: PropTypes.bool,
    accent: PropTypes.string,
    dialect_difficulties: PropTypes.bool,
    dialect: PropTypes.string,
    speech_speed_difficulties: PropTypes.bool,
    speech_speed: PropTypes.string,
    speech_tone_difficulties: PropTypes.bool,
    speech_tone: PropTypes.string,
    speech_impairment_difficulties: PropTypes.bool,
    speech_impairment: PropTypes.string,
    aphasia_features_difficulties: PropTypes.bool,
    aphasia_features: PropTypes.string,
    moving_way_choice: PropTypes.string,
    moving_way: PropTypes.string,
    attention_disorders_choice: PropTypes.string,
    attention_disorders: PropTypes.string,
    memory_impairment_choice: PropTypes.string,
    memory_impairment: PropTypes.string,
    mood_choice: PropTypes.string,
    mood: PropTypes.string,
    psychomotor_drive_choice: PropTypes.string,
    psychomotor_drive: PropTypes.string,
    affect_choice: PropTypes.string,
    affect: PropTypes.string,
    anxiety_choice: PropTypes.string,
    anxiety: PropTypes.string,
    delusions_choice: PropTypes.string,
    delusions: PropTypes.string,
    hallucinations_choice: PropTypes.string,
    hallucinations: PropTypes.string,
    illusions_choice: PropTypes.string,
    illusions: PropTypes.string,
    perception_disorders_choice: PropTypes.string,
    perception_disorders: PropTypes.string,
    abnormal_thinking_choice: PropTypes.string,
    abnormal_thinking: PropTypes.string,
    criticism_disturbance_choice: PropTypes.string,
    criticism_disturbance: PropTypes.string,
    complex_activity_choice: PropTypes.string,
    complex_activity: PropTypes.string,
    catatonic_parakinesis_choice: PropTypes.string,
    catatonic_parakinesis: PropTypes.string,
    memorizing_difficulties: PropTypes.bool,
    memorizing: PropTypes.string,
    attention_counting_difficulties: PropTypes.bool,
    attention_counting: PropTypes.string,
    reminding_difficulties: PropTypes.bool,
    reminding: PropTypes.string,
    language_skills_difficulties: PropTypes.bool,
    language_skills: PropTypes.string,
    resignation_thoughts_choice: PropTypes.bool,
    resignation_thoughts: PropTypes.string,
    suicide_thoughts_choice: PropTypes.bool,
    suicide_thoughts: PropTypes.string,
    suicidal_plans_choice: PropTypes.bool,
    suicidal_plans: PropTypes.string,
    murder_fantasies_choice: PropTypes.bool,
    murder_fantasies: PropTypes.string,
    murder_plans_choice: PropTypes.bool,
    murder_plans: PropTypes.string,
  }).isRequired,
};

export default PsychiatricAssessmentForm;
