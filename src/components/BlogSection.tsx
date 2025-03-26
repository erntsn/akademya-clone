import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Diş Çürüğü Belirtileri ve Tedavi Yöntemleri",
    image: "https://ext.same-assets.com/1308614748/190291453.png",
    category: "Diş Tedavileri",
    link: "/blog/dis-curugu-belirtileri-ve-tedavi-yontemleri"
  },
  {
    id: 2,
    title: "Nasıl 20'li Yaşlarda Ertesi Gün Oral Etkileri Önlenebilir?",
    image: "https://ext.same-assets.com/1308614748/333544496.jpeg",
    category: "Implant Diş",
    link: "/blog/nasil-20li-yaslarda-ertesi-gun-oral-etkileri-onlenebilir"
  },
  {
    id: 3,
    title: "Diş Eti Çekilmesi Nedenleri ve Korunma Yöntemleri",
    image: "https://ext.same-assets.com/1308614748/3353739696.jpeg",
    category: "Diş Eti Hastalıkları",
    link: "/blog/dis-eti-cekilmesi-nedenleri-ve-korunma-yontemleri"
  },
  {
    id: 4,
    title: "Ortodontik Tedavi Sonrası Türev Müdahale Yöntemleri",
    image: "https://ext.same-assets.com/1308614748/3611382824.jpeg",
    category: "Ortodonti",
    link: "/blog/ortodontik-tedavi-sonrasi-turev-mudahale-yontemleri"
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="content-container">
        <h2 className="text-3xl font-bold text-center text-akademya-navy mb-10">
          Diş Tedavileri Hakkında Faydalı Bilgiler | Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog-2" className="btn-primary">
            Tüm Blog Yazılarını Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
};

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    image: string;
    category: string;
    link: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={post.link}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-akademya-teal text-white text-xs font-medium py-1 px-2 rounded">
            {post.category}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-akademya-navy line-clamp-2 text-base">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default BlogSection;
