import styles from '@styles/article.module.css'
import {ArticleInfo} from "@interfaces/article";

interface IProps {
    article: ArticleInfo;
}

export default function Article({ article }:IProps) {
    console.log(article);
    return <div className={styles.article}>
        <div className={styles.thumbnail}>
            {/*<img src={article.meta.thumbnail} />*/}

            <div className={styles.title}>
                {/*<h1>{article.meta.title}</h1>*/}
            </div>
        </div>

        <div className={styles.content}>
            {/*<p> {article.content} </p>*/}
        </div>
    </div>
}
