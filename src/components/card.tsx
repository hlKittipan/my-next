import Link from "next/link";
import { FunctionComponent } from "react";
import { ArticleMeta } from "@interfaces/article";
import styles from "@styles/card.module.css";
import Image from "next/image";
import profileImage from "@images/profile.png";

interface IProps {
    article: ArticleMeta;
}
const Profile = () => (
    <Image
        src={profileImage} // Route of the image file
        height={300} // Desired size with correct aspect ratio
        width={300} // Desired size with correct aspect ratio
        alt="Your Name"
    />
)
const Card: FunctionComponent<IProps> = ({ article }) => {
    const slug = article.title.replaceAll(' ','-');
    return <Link href={`/posts/${slug}`}>
        <div className={styles.card}>
            <Profile />
            <div className={styles.info}>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
            </div>
        </div>
    </Link>
}

export default Card;
