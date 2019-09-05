import Link from 'next/link';
import Layout from '../components/Layout';

import AddressShow from '../components/AddressShow';
import firebase from "firebase";

export default () => (
    <Layout header="address show" title="AddressShow">
        <AddressShow />
        <hr />
        <div>
            <Link href="/address">
                <button>BACK</button>
            </Link>
        </div>
    </Layout>
);