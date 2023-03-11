import { SidebarLayout } from '@components/layouts';
import { BodyText, HeadingText } from '@components/typography';
import { Button, Card, Input } from '@components/ui';
import { NextPageWithLayout } from '@pages/_app';
import { ITreeForm } from '@type/forms';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const CreateTreePage: NextPageWithLayout = () => {
  const methods = useForm<ITreeForm>();
  const onSubmit: SubmitHandler<ITreeForm> = async (data) => {
    console.log(data);
  };

  return (
    <section>
      <Card background="bg-neutral-100">
        <div className="p-8 flex flex-col gap-10">
          <div>
            <HeadingText elementTag="h2" type="text-headingTwo" className="mb-2">
              Create a new tree
            </HeadingText>
            <BodyText type="text-bodyDefault">
              Fill out the form in order to create a new tree that will be shown as a new product for the customers
            </BodyText>
          </div>
          <FormProvider {...methods}>
            <form className="flex flex-col gap-6" onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                <Input label="Name" keyInput="name" type="text" placeholder="Name" isFullWidth={true} />
                <Input label="Description" keyInput="description" type="text" placeholder="Description" isFullWidth={true} />
                <Input label="Meaning" keyInput="meaning" type="text" placeholder="Meaning" isFullWidth={true} />
                <Input label="Price" keyInput="price" type="text" placeholder="Price" isFullWidth={true} />
                <Input label="Consume" keyInput="consume" type="number" placeholder="Consume" isFullWidth={true} />
                <Input label="Image" keyInput="image" type="file" placeholder="Image" isFullWidth={true} />
              </div>
              <div className="self-end">
                <Button type="btn-medium" color="primary">
                  Create new tree
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Card>
    </section>
  );
};

export default CreateTreePage;

CreateTreePage.properties = {
  pageAuth: { isAuthRequired: true, authLevel: 'Administrators' },
  getLayout: (page) => {
    return <SidebarLayout pageTitle="Create Tree">{page}</SidebarLayout>;
  },
};
