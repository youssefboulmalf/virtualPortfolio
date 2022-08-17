import css from './ContactForm.module.css'

export const TextArea = props => (
    <div className={css.inputBox}>
    <label
        className={props.focus || props.value !== "" ? css.labelFocus : css.label}
        htmlFor={props.name}
    >
        {props.label}
    </label>
        <textarea
            className={css.inputMessage}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onInput={props.onInput}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
        <p className={css.errorMessage}>{props.errorMessage}</p>
        </div>
);

export default TextArea