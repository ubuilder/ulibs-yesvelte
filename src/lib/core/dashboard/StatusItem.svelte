<script lang="ts">
    import { Card, CardBody, El, Icon } from "yesvelte";
  
    export let title: string | undefined = undefined;
    export let icon: string | undefined = undefined;
    export let value: any | undefined = undefined;
    export let color: any | undefined = undefined;
  </script>
  
  <El colMd="6" mb="2" colLg="4" {...$$restProps}>
    <Card bgOpacity="10">
      <CardBody>
        <El row>
          <El col="auto" pe="3">
            <Icon size="3x" color={color} name={icon} />
          </El>
          <El col>
            <El textColor="light">
              {title}
            </El>
  
            <El tag="strong" textColor={color} style="font-size: 22px;">
              {value}
            </El>
          </El>
        </El>
      </CardBody>
    </Card>
  </El>
  