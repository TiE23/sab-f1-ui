import { Stack } from "@bedrock-layout/stack";
import { Column, Columns } from "@bedrock-layout/columns";

import { MockupBlock } from "../../Common/MockupBlock.styled";
import { ExpandedStack, ExpandedBlock } from "./styles";

type LayoutProps = {
  headerHeight?: number,
};

export function Layout({ headerHeight }: LayoutProps) {
  const headerOffset = headerHeight ? headerHeight + 5 : 0;

  return (
    <Stack gutter="none">
      <Columns gutter="none" columns={7} dense>
        <MockupBlock
          color="#f7aeae"
          minWidth="200px"
          minHeight={`calc(65vh - ${headerOffset}px)`}
        >Timing Board UI</MockupBlock>
        <Column span={6}>
          <MockupBlock
            color="#c5c5c5"
            minHeight="100%"
          >Video Feed</MockupBlock>
        </Column>
      </Columns>
      <Columns gutter="none" columns={7} dense>
        <Column span={1}>
          <ExpandedStack>
            <ExpandedBlock>
              <MockupBlock
                color="#5576e2"
                minWidth="200px"
                minHeight="200px"
                height="20vh"
              >Race Status UI</MockupBlock>
            </ExpandedBlock>
            <ExpandedBlock>
              <MockupBlock
                color="#bc62ce"
                minHeight="40px"
                height="15vh"
              >Race Director UI</MockupBlock>
            </ExpandedBlock>
          </ExpandedStack>
        </Column>
        <Column span={6}>
          <MockupBlock
            color="#4d828b"
            minHeight="35vh"
          >Broadcast Director UI</MockupBlock>
        </Column>
      </Columns>
    </Stack>
  );
}
