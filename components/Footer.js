import Link from "next/link";

export default function Footer() {
	return (
		<div className={'flex-shrink-0 text-center text-md p-4 border-t bg-white'}>
			Created by {' '}
			<Link
				className={'text-black'}
				href={"https://metaschool.so/"}
				target={'_blank'}
				rel={'noopener noreferrer'}
			>
				MetaSchool
			</Link>
		</div>
	)
}