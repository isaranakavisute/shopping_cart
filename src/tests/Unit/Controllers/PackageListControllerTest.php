<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Support\Arr;
use Mockery as m;

use App\Facades\PackageListService;

class PackageListControllerTest extends TestCase
{
    public function testGetGroup()
    {
        $mock_response = json_decode('[{"title":{"th":"Hot Product","en":"Hot Product"},"record":[{"name":"4G+ Unlimited SIM \u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19","sim_type":"postpaid","sim_source_type":["physical-sim","e-sim"],"sim_sub_type":null,"product_id":91587234,"sku":"3000085736","inventory_id":3078353,"store_id":941527,"nas_code":"5GUMax","campaign_code":"","source_type":"sim","penalty":3000,"baseline":699,"advance_payment":0,"advance_payment_code":"","contract":12,"package_name":"5G UMax","package_image_desktop":"https:\/\/dummyimage.com\/800\/ff0000\/ffffff.png&text=Package+Image","package_image_mobile":"https:\/\/dummyimage.com\/800\/ff0000\/ffffff.png&text=Package+Image","package_detail_desktop":"https:\/\/dummyimage.com\/800\/ff0000\/ffffff.png&text=Package+Detail","package_detail_mobile":"https:\/\/dummyimage.com\/800\/ff0000\/ffffff.png&text=Package+Detail","proposition_amdoc":"","proposition_rms":"","promotion_set":"","product_name":"","campaign_name":"","discount":"","discount_code":"","other_pay_amount_code":"","other_pay_amount":"","group_id":"9","group_code":"hot_package","group_name":"Hot Package","image_url":"https:\/\/store.wls-dev.com\/upload\/gallery5\/941527\/a\/bc\/328f1820270c77c130f170785febdbca.jpg","verification_required":false,"verification_type":null},{"name":"4G+ Unlimited SIM \u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19","sim_type":"postpaid","sim_source_type":["physical-sim","e-sim"],"sim_sub_type":null,"product_id":91587234,"sku":"3000085736","inventory_id":3078353,"store_id":941527,"nas_code":"5GUltraMaxSpeed","campaign_code":"","source_type":"sim","penalty":0,"baseline":699,"advance_payment":0,"advance_payment_code":"","contract":12,"package_name":"5G Ultra Max Speed Plus","package_image_desktop":"https:\/\/dummyimage.com\/800\/ff0000\/ffffff.png&text=Package+Image","package_image_mobile":"https:\/\/dummyimage.com\/800\/ff0000\/ffffff.png&text=Package+Image","package_detail_desktop":"https:\/\/dummyimage.com\/800\/ff0000\/ffffff.png&text=Package+Detail","package_detail_mobile":"https:\/\/dummyimage.com\/800\/ff0000\/ffffff.png&text=Package+Detail","proposition_amdoc":"","proposition_rms":"","promotion_set":"","product_name":"","campaign_name":"","discount":"","discount_code":"","other_pay_amount_code":"","other_pay_amount":"","group_id":"9","group_code":"hot_package","group_name":"Hot Package","image_url":"https:\/\/store.wls-dev.com\/upload\/gallery5\/941527\/a\/bc\/328f1820270c77c130f170785febdbca.jpg","verification_required":false,"verification_type":null},{"name":"True 5G \u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19","sim_type":"postpaid","sim_source_type":["physical-sim"],"sim_sub_type":null,"product_id":91587186,"sku":"sim5g-1","inventory_id":3078300,"store_id":941527,"nas_code":"5GVIPBundle","campaign_code":"","source_type":"sim","penalty":0,"baseline":599,"advance_payment":0,"advance_payment_code":"","contract":18,"package_name":"5G VIP Mid Tier","package_image_desktop":"https:\/\/res.wemall.com\/943745\/c_thumb\/23a95f6a686d2cdb0528bbba0131bebe\/5g-vip_packshot.jpg","package_image_mobile":"https:\/\/res.wemall.com\/943745\/c_thumb\/23a95f6a686d2cdb0528bbba0131bebe\/5g-vip_packshot.jpg","package_detail_desktop":"https:\/\/res.wemall.com\/943745\/c_thumb\/0d092395043159022065e4350c73111e\/5g-vip_landingpage.jpg","package_detail_mobile":"https:\/\/res.wemall.com\/943745\/c_thumb\/0d092395043159022065e4350c73111e\/5g-vip_landingpage.jpg","proposition_amdoc":null,"proposition_rms":null,"promotion_set":null,"product_name":null,"campaign_name":null,"discount":null,"discount_code":null,"other_pay_amount_code":null,"other_pay_amount":null,"group_id":"9","group_code":"hot_package","group_name":"Hot Package","image_url":"https:\/\/store.wls-dev.com\/upload\/gallery5\/941527\/8\/59\/88483d234d6d5f61217fe26746948598.jpg","verification_required":false,"verification_type":null}]},{"title":{"th":"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e2a\u0e27\u0e22 \u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e21\u0e07\u0e04\u0e25","en":"BerFuntong, Nice & Lucky Number"},"record":[]},{"title":{"th":"\u0e41\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e08\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e40\u0e19\u0e47\u0e15 5G \u0e41\u0e23\u0e07\u0e40\u0e15\u0e47\u0e21\u0e2a\u0e1b\u0e35\u0e14 \u0e40\u0e19\u0e47\u0e15\u0e44\u0e21\u0e48\u0e2d\u0e31\u0e49\u0e19","en":"5G Max Speed, Net Unlimited"},"record":[{"name":"\u0e0b\u0e34\u0e21\u0e42\u0e0b\u0e40\u0e0a\u0e35\u0e22\u0e25 4G++","sim_type":"postpaid","sim_source_type":["physical-sim"],"sim_sub_type":null,"product_id":91580006,"sku":"TMH-01","inventory_id":3072342,"store_id":941527,"nas_code":"UATPROPO","campaign_code":"","source_type":"sim","penalty":0,"baseline":0,"advance_payment":0,"advance_payment_code":"","contract":0,"package_name":"UATPROPO","package_image_desktop":null,"package_image_mobile":null,"package_detail_desktop":null,"package_detail_mobile":null,"proposition_amdoc":null,"proposition_rms":null,"promotion_set":null,"product_name":null,"campaign_name":null,"discount":null,"discount_code":null,"other_pay_amount_code":null,"other_pay_amount":null,"group_id":"11","group_code":"5g_max_speed_package","group_name":"5G Max Speed, Net Unlimited","image_url":"https:\/\/store.wls-dev.com\/upload\/gallery5\/941527\/1\/d4\/3982f65020ababa9db59f63bd3c09d41.png","verification_required":false,"verification_type":null}]},{"title":{"th":"\u0e41\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e08\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32","en":"Student Package"},"record":[]}]', true);
        
        PackageListService::shouldReceive('listSimPostpaidGroup')
            ->andReturn($mock_response);

        $res      = $this->get('/api/true/package-list/group');
        $response = json_decode($res->getContent(), true);

        $this->assertEquals(0, Arr::get($response, 'status_code'));
        $this->assertEquals('OK', Arr::get($response, 'status_txt'));
    }
}