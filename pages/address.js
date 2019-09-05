import Link from 'next/link';
import Layout from '../components/Layout';
import Address from '../components/Address';

export default () => (
    <Layout header="address book" title="Address">
        <Address />
        <hr />
        <div>
            <Link href="/address_add">
                <button>ADD</button>
            </Link>
        </div>
    </Layout>
)