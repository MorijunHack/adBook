import Link from 'next/link';
import Layout from '../components/Layout';

import AddressAdd from '../components/AddressAdd';
import firebase from "firebase";

export default () => (
    <Layout header="address create" title="AddressCreate">
        <AddressAdd />
        <hr />
        <div>
            <Link href="/address">
                <button>BACK</button>
            </Link>
        </div>
    </Layout>
);