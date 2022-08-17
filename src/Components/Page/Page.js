import css from './Page.module.css'

const Page = (props) => {

    return (
        <div className={css.root}>
            <div className={css.content}>
                {props.children}
            </div>
        </div>
    )
}
export default Page
